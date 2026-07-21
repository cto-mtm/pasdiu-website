import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions/v2";
import { ZodError } from "zod";
import formConfigs from "./models.js";
import { createTransporter, formatFrom } from "./helpers/mailer.js";
import { verifyRecaptcha } from "./helpers/recaptcha.js";
import { buildNotificationEmail } from "./templates/notificationEmail.js";
import { buildConfirmationEmail } from "./templates/confirmationEmail.js";

const GMAIL_USER = defineSecret("GMAIL_USER");
const GMAIL_APP_PASSWORD = defineSecret("GMAIL_APP_PASSWORD");
const GMAIL_SENDER = defineSecret("GMAIL_SENDER");
const RECAPTCHA_SECRET_KEY = defineSecret("RECAPTCHA_SECRET_KEY");

const ALLOWED_ORIGINS = [
  "https://pasdiu.com",
  "https://www.pasdiu.com",
  "https://pasdiu-website.web.app",
  "https://pasdiu-website.firebaseapp.com",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

export const submitForm = onRequest(
  {
    cors: ALLOWED_ORIGINS,
    region: "us-central1",
    maxInstances: 10,
    secrets: [GMAIL_USER, GMAIL_APP_PASSWORD, GMAIL_SENDER, RECAPTCHA_SECRET_KEY],
  },
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        res.status(405).json({ success: false, error: "Method not allowed" });
        return;
      }

      const { formType, data, recaptchaToken } = (req.body ?? {}) as {
        formType?: string;
        data?: Record<string, unknown>;
        recaptchaToken?: string;
      };

      const config = formType ? formConfigs[formType] : undefined;
      if (!formType || !config) {
        res.status(400).json({
          success: false,
          error: `Unknown formType "${formType ?? ""}". Valid types: ${Object.keys(formConfigs).join(", ")}`,
        });
        return;
      }

      let recaptchaSecret = "";
      try {
        recaptchaSecret = RECAPTCHA_SECRET_KEY.value();
      } catch (err) {
        logger.warn("RECAPTCHA_SECRET_KEY secret not available", { error: String(err) });
      }

      const recaptcha = await verifyRecaptcha(
        recaptchaToken,
        recaptchaSecret,
      );
      if (!recaptcha.success) {
        logger.warn("reCAPTCHA verification failed", { formType, error: recaptcha.error });
        res.status(403).json({ success: false, error: "reCAPTCHA verification failed" });
        return;
      }

      let parsed: Record<string, unknown>;
      try {
        parsed = config.schema.parse(data ?? {});
      } catch (err) {
        if (err instanceof ZodError) {
          res.status(400).json({ success: false, error: "Validation failed", details: err.flatten() });
          return;
        }
        throw err;
      }

      let gmailUser = "";
      let gmailPassword = "";
      let gmailSender = "";
      try {
        gmailUser = GMAIL_USER.value();
        gmailPassword = GMAIL_APP_PASSWORD.value();
        gmailSender = GMAIL_SENDER.value();
      } catch (err) {
        logger.error("Failed to retrieve Gmail secrets from Secret Manager", { error: String(err) });
        res.status(500).json({ success: false, error: "Email service credentials missing or inaccessible." });
        return;
      }

      const transporter = createTransporter(gmailUser, gmailPassword);
      const from = formatFrom(gmailSender);

      const name = typeof parsed.name === "string" ? parsed.name : "Unknown";
      const subject = `${config.subject} — ${name.replace(/[\r\n]/g, "")}`;

      try {
        const userEmail = typeof parsed.email === "string" && parsed.email ? parsed.email : undefined;

        await transporter.sendMail({
          from,
          to: config.notifyEmail,
          replyTo: userEmail,
          subject,
          html: buildNotificationEmail(config, parsed),
        });
        logger.info("Notification email sent", { formType, to: config.notifyEmail });

        if (userEmail) {
          await transporter.sendMail({
            from,
            to: userEmail,
            replyTo: gmailSender,
            subject: config.confirmationSubject,
            html: buildConfirmationEmail(config, parsed),
          });
          logger.info("Confirmation email sent", { formType, to: userEmail });
        }
      } catch (mailErr) {
        const mailErrMsg = mailErr instanceof Error ? mailErr.message : String(mailErr);
        logger.error("Failed to send email notification", { error: mailErrMsg, stack: mailErr instanceof Error ? mailErr.stack : undefined });
        res.status(500).json({ success: false, error: "Failed to send email notification.", details: mailErrMsg });
        return;
      }

      res.status(200).json({ success: true });
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err);
      logger.error("Unhandled error processing submitForm request", {
        error: errMsg,
        stack: err instanceof Error ? err.stack : undefined,
      });
      res.status(500).json({ success: false, error: "Internal server error", details: errMsg });
    }
  },
);
