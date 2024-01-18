import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://anmapbsnszevvlkwugun.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFubWFwYnNuc3pldnZsa3d1Z3VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDYzMjAsImV4cCI6MjAxNzI4MjMyMH0.bt5p3xs_SsomQTx95lESRDcKUSHxJJ_7wcMZGEwAAgE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
