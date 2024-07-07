import { createSupabaseServerClient } from '@/sections/shared/supabase/supabaseServerClient'
import { AuthButtonServer } from '@/sections/shared/components/auth-button-server'
import { redirect } from 'next/navigation'

export default async function Home () {
  const supabase = createSupabaseServerClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: qvs } = await supabase.from('quvis').select('*')

  return (
      <div className="flex flex-col items-center">
        <p className="bg-amber-800">Hello 👋</p>
        <AuthButtonServer/>

        <pre>
          {JSON.stringify(qvs, null, 2)}
        </pre>
      </div>
  )
}
