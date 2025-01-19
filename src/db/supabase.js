import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_DATABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_DATABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("환경 변수가 올바르게 설정되지 않았습니다.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
