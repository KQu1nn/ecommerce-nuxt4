import { createClient } from '@supabase/supabase-js'

let supabase

export function useSupabase() {
  const config = useRuntimeConfig()

  if (!supabase) {
    supabase = createClient(
      config.public.supabaseUrl,
      config.public.supabaseAnonKey
    )
  }

  return supabase
}
