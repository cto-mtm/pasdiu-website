import type { FormConfig } from "../models.js";
import { escapeHtml } from "../helpers/escapeHtml.js";

/** User-facing confirmation email: thanks the sender and echoes their message. */
export function buildConfirmationEmail(
  config: FormConfig,
  data: Record<string, unknown>,
): string {
  const name = escapeHtml(data.name ?? "there");
  const message = escapeHtml(data.message ?? "");

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(15,23,42,0.1);">
            <tr>
              <td style="background:#0f172a;padding:20px 28px;">
                <h1 style="margin:0;font-size:18px;color:#ffffff;">Pasdiu</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;font-size:14px;color:#0f172a;line-height:1.6;">
                <p style="margin:0 0 12px;">Hi ${name},</p>
                <p style="margin:0 0 12px;">Thanks for reaching out — we received your message and will get back to you shortly.</p>
                ${message ? `<p style="margin:0 0 4px;color:#64748b;font-size:12px;">Your message:</p><blockquote style="margin:0;padding:12px 16px;background:#f8fafc;border-left:3px solid #cbd5e1;color:#334155;white-space:pre-wrap;">${message}</blockquote>` : ""}
                <p style="margin:16px 0 0;">— The Pasdiu team</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px;background:#f8fafc;font-size:12px;color:#64748b;">
                Pasdiu · REPLACE_ME company address
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
