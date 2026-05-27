import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl) {
  console.warn("⚠️ NEXT_PUBLIC_SUPABASE_URL is missing. Please add it to your environment variables.");
}

// Safely initialize to prevent build-time exceptions when keys are not yet configured in local environments
export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : (null as any);
