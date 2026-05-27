/**
 * Combines conditional class names together into a single string.
 */
export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Formats a phone number string for UI display.
 */
export function formatPhoneNumber(phone: string) {
  return phone;
}

/**
 * Strips/escapes HTML entities to prevent XSS injection.
 */
export function sanitizeInput(val: string | null | undefined): string {
  if (val === null || val === undefined) return "";
  if (typeof val !== "string") return String(val);
  return val
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Checks if email matches database schema regex constraint.
 */
export function isValidEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email.trim());
}

