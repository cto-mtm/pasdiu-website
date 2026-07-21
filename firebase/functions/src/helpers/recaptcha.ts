const MIN_SCORE = 0.3;
const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

export interface RecaptchaResult {
  success: boolean;
  score?: number;
  error?: string;
}

export async function verifyRecaptcha(
  token: string | undefined,
  secretKey: string,
): Promise<RecaptchaResult> {
  // The emulator has no real browser token — always allow in local dev.
  if (process.env.FUNCTIONS_EMULATOR === "true") {
    return { success: true, score: 1.0 };
  }

  if (!token) {
    return { success: false, error: "Missing reCAPTCHA token" };
  }

  try {
    const params = new URLSearchParams({ secret: secretKey, response: token });
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
