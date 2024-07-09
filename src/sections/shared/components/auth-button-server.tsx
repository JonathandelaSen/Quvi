import { AuthButtonClient } from '@/sections/shared/components/auth-button-client'
import { createSupabaseServerClient } from '@/sections/shared/supabase/supabaseServerClient'

export async function AuthButtonServer () {
  const supabase = createSupabaseServerClient()
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <AuthButtonClient session={session} />
  )
}
