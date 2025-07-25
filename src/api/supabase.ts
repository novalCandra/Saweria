import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://siovezkjsfiilkdipags.supabase.co";
const supabaseuKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpb3Zlemtqc2ZpaWxrZGlwYWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNjIzMjIsImV4cCI6MjA2ODkzODMyMn0.QCG69LhiklIaPiD17W_MeVP5rLgDcUCohTG3_oQhSf4";

export const supabase = createClient(supabaseUrl, supabaseuKey);
