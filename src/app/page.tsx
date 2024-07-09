import { createSupabaseServerClient } from '@/sections/shared/supabase/supabaseServerClient'
import { AuthButtonServer } from '@/sections/shared/components/auth-button-server'
import { redirect } from 'next/navigation'
import { QvsList } from '@/app/sections/qvs/qvs-list'

export default async function Home () {
  const supabase = createSupabaseServerClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: qvs } = await supabase.from('quvis').select('*, users(*)')

  return (
    <main className="flex min-h-screen flex-col items-center">
      <p className="bg-amber-800">Hello 👋</p>
      <AuthButtonServer/>
      <QvsList qvs={qvs}/>
    </main>
  )
}
