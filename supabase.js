import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = "https://kyidetkjxafbzqkbficn.supabase.co/";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5aWRldGtqeGFmYnpxa2JmaWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk2MTM0OTAsImV4cCI6MTk2NTE4OTQ5MH0.zi096s5VSdUOw_TKdKFthe8znjHv3xbyoi7BjxeFRqk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
});