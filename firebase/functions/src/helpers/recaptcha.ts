import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";

const MIN_SCORE = 0.3;
const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

let client: RecaptchaEnterpriseServiceClient | null = null;

function getClient(): RecaptchaEnterpriseServiceClient {
  if (!client) {
    client = new RecaptchaEnterpriseServiceClient();
  }
  return client;
}

export interface RecaptchaResult {
  success: boolean;
  score?: number;
  error?: string;
}

export async function verifyRecaptcha(
  token: string | undefined,
  secretOrSiteKey: string,
  expectedAction: string = "contact_form",
): Promise<RecaptchaResult> {
  // The emulator has no real browser token — always allow in local dev.
  if (process.env.FUNCTIONS_EMULATOR === "true") {
    return { success: true, score: 1.0 };
  }

  if (!token) {
    return { success: false, error: "Missing reCAPTCHA token" };
  }

  const projectId = process.env.GCLOUD_PROJECT || "pasdiu-website";
  // The site key used on the frontend
  const siteKey = "6Lc7XF0tAAAAAKGTvDuGPWQOFaTmUNe2MRh4vts4";

  // Try reCAPTCHA Enterprise Assessment API first
  try {
    const enterpriseClient = getClient();
    const projectPath = enterpriseClient.projectPath(projectId);
    const [response] = await enterpriseClient.createAssessment({
      parent: projectPath,
      assessment: {
        event: {
          token,
          siteKey,
          expectedAction,
        },
      },
    });

    if (response.tokenProperties?.valid) {
      const score = response.riskAnalysis?.score ?? 1.0;
      if (score < MIN_SCORE) {
        return { success: false, score, error: `Score ${score} below threshold ${MIN_SCORE}` };
      }
      return { success: true, score };
    }
  } catch (err) {
    // Enterprise assessment failed or is unconfigured; fall through to siteverify
  }

  // Fallback to classic siteverify
  try {
    const params = new URLSearchParams({ secret: secretOrSiteKey, response: token });
    const res = await fetch(VERIFY_URL, { method: "POST", body: params });
    const json = (await res.json()) as { success: boolean; score?: number; "error-codes"?: string[] };

    if (!json.success) {
      return { success: false, error: (json["error-codes"] ?? []).join(", ") || "Verification failed" };
    }
    if ((json.score ?? 0) < MIN_SCORE) {
      return { success: false, score: json.score, error: `Score ${json.score} below threshold ${MIN_SCORE}` };
    }
    return { success: true, score: json.score };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Verification request failed" };
  }
}
