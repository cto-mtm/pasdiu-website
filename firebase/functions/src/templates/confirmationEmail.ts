import type { FormConfig } from "../models.js";
import { escapeHtml } from "../helpers/escapeHtml.js";

/** User-facing confirmation email: thanks the sender and echoes their message matching the website dark theme. */
export function buildConfirmationEmail(
  config: FormConfig,
  data: Record<string, unknown>,
): string {
  const name = escapeHtml(data.name ?? "there");
  const message = escapeHtml(data.message ?? "");
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(config.confirmationSubject)}</title>
  </head>
  <body style="margin:0;padding:32px 16px;background-color:#121212;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;background:#1e1e1e;border:1px solid #333333;border-top:3px solid #22d3ee;border-radius:12px;overflow:hidden;box-shadow:0 12px 32px rgba(0,0,0,0.6);">
            <!-- Header -->
            <tr>
              <td style="background:#161616;padding:24px 32px;border-bottom:1px solid #2a2a2a;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="left">
                      <a href="https://pasdiu.com" style="text-decoration:none;display:inline-flex;align-items:center;">
                        <img src="https://pasdiu.com/images/logo-white.svg" alt="Pasdiu Logo" width="28" height="28" style="display:inline-block;vertical-align:middle;margin-right:10px;border:0;outline:none;" />
                        <span style="font-family:'B612 Mono',ui-monospace,SFMono-Regular,Consolas,'Courier New',monospace;font-size:18px;font-weight:700;color:#ffffff;letter-spacing:1.5px;vertical-align:middle;">PASDIU</span>
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px;color:#f5f5f5;font-size:14px;line-height:1.6;">
                <h1 style="margin:0 0 16px 0;font-size:18px;font-weight:600;color:#ffffff;line-height:1.4;">Hi ${name},</h1>
                <p style="margin:0 0 16px 0;color:#a3a3a3;">Thanks for reaching out — we received your message and will get back to you shortly.</p>
                ${
                  message
                    ? `<div style="margin:24px 0;">
                        <p style="margin:0 0 8px 0;color:#22d3ee;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;font-family:'B612 Mono',ui-monospace,SFMono-Regular,Consolas,monospace;">Your Message:</p>
                        <blockquote style="margin:0;padding:16px 20px;background:#161616;border-left:3px solid #22d3ee;border-top:1px solid #2a2a2a;border-right:1px solid #2a2a2a;border-bottom:1px solid #2a2a2a;border-radius:0 8px 8px 0;color:#f5f5f5;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</blockquote>
                      </div>`
                    : ""
                }
                <div style="margin-top:28px;padding-top:20px;border-top:1px solid #262626;">
                  <p style="margin:0;color:#ffffff;font-weight:600;">— The Pasdiu Team</p>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px 32px;background:#161616;border-top:1px solid #2a2a2a;font-size:12px;color:#a3a3a3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;line-height:1.5;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="left" style="color:#a3a3a3;">
                      <strong>Pasdiu</strong> · Client-work logistics for media creators
                    </td>
                    <td align="right">
                      <a href="https://pasdiu.com" style="color:#22d3ee;text-decoration:none;font-weight:500;">pasdiu.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding-top:8px;font-size:11px;color:#737373;">
                      © ${year} Pasdiu. All rights reserved.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
