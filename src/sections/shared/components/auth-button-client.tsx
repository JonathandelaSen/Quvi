'use client'

import { type Session } from '@supabase/auth-js'
import { createSupabaseClientClient } from '@/sections/shared/supabase/supabaseClientClient'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function AuthButtonClient ({ session }: { session: Session | null }) {
  const supabase = createSupabaseClientClient()
  const router = useRouter()

  const handleSignIn = async () => {
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

            <Button type="button" className="bg-primary hover:bg-primary/90 text-white" onClick={handleSignOut}>
                          Sign out
            </Button>)

          : (<Button type="button" className="bg-primary hover:bg-primary/90 text-white mr-16" onClick={handleSignIn}>
                      Sign in
          </Button>)
      }

    </header>
  )
}
