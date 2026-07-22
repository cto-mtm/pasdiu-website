import { z } from "zod";

export interface FormConfig {
  schema: z.ZodObject<z.ZodRawShape>;
  notifyEmail: string;
  subject: string;
  confirmationSubject: string;
  requiredFields: string[];
  optionalFields: string[];
}

const formConfigs: Record<string, FormConfig> = {
  "contact": {
    schema: z.object({
      name: z.string().min(1),
      email: z.string().email(),
      company: z.string().optional(),
      teamSize: z.string().optional(),
      message: z.string().min(1),
    }),
    requiredFields: ["name", "email", "message"],
    optionalFields: ["company", "teamSize"],
    notifyEmail: "mercedes@mtmcya.com",
    subject: "New Pasdiu Contact Form Submission",
    confirmationSubject: "We received your message — Pasdiu",
  },
  // Add more form types here (e.g., "request-demo", "newsletter")
  // following the same shape.
};

export default formConfigs;
