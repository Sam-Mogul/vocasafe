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
