'use client'

import { type Session } from '@supabase/auth-js'
import { createSupabaseClientClient } from '@/sections/shared/supabase/supabaseClientClient'
import { useRouter } from 'next/navigation'

export function AuthButtonClient ({ session }: { session: Session | null }) {
  const supabase = createSupabaseClientClient()
  const router = useRouter()

  const handleSignIn = async () => {
    console.log('handleSignIn')
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
      <header className="">
          {
              session !== null
                ? (
                      <button type="button" className="bg-primary text-white" onClick={handleSignOut}>
                          Sign out
                      </button>)

                : (<button type="button" className="bg-primary text-white mr-16" onClick={handleSignIn}>
                      Sign in
                  </button>)
          }

      </header>
  )
}
