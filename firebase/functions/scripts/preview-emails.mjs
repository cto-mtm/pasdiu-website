/**
 * Renders the email templates to firebase/functions/preview/*.html
 * for visual review in a browser.
 *
 * Usage: npm run preview:emails   (builds first, then runs this)
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const previewDir = join(__dirname, "..", "preview");

const { buildNotificationEmail } = await import("../lib/templates/notificationEmail.js");
const { buildConfirmationEmail } = await import("../lib/templates/confirmationEmail.js");
const modelsModule = await import("../lib/models.js");
const formConfigs = modelsModule.default?.default || modelsModule.default;

const config = formConfigs["contact"];
const sampleData = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "Analytical Post",
  teamSize: "3-15",
  message: "We manage ~20 clients and are drowning in review links.\nDoes Pasdiu handle versioned approvals?",
};

mkdirSync(previewDir, { recursive: true });
writeFileSync(join(previewDir, "notification.html"), buildNotificationEmail(config, sampleData));
writeFileSync(join(previewDir, "confirmation.html"), buildConfirmationEmail(config, sampleData));

console.log(`✓ Wrote preview/notification.html and preview/confirmation.html`);
