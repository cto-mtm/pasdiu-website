import type { FormConfig } from "../models.js";
import { escapeHtml } from "../helpers/escapeHtml.js";

/** Internal notification email: a centered card listing every submitted field. */
export function buildNotificationEmail(
  config: FormConfig,
  data: Record<string, unknown>,
): string {
  const rows = [...config.requiredFields, ...config.optionalFields]
    .filter((field) => data[field] !== undefined && data[field] !== "")
    .map(
      (field) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#334155;text-transform:capitalize;vertical-align:top;">${escapeHtml(field)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;white-space:pre-wrap;">${escapeHtml(data[field])}</td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(15,23,42,0.1);">
            <tr>
              <td style="background:#0f172a;padding:20px 28px;">
                <h1 style="margin:0;font-size:18px;color:#ffffff;">${escapeHtml(config.subject)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
                  ${rows}
                </table>
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
