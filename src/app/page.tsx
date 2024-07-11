import { createSupabaseServerClient } from '@/sections/shared/supabase/supabaseServerClient'
import { AuthButtonServer } from '@/sections/shared/components/auth-button-server'
import { redirect } from 'next/navigation'
import { QvsList } from '@/app/sections/qvs/qvs-list'
import { QvsCreateForm } from '@/app/sections/qvs/qvs-create-form'

export default async function Home() {
  const supabase = createSupabaseServerClient()
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }
  const { data: qvs } = await supabase
    .from('quvis')
    .select('*, users(*)')
    .order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <p className="bg-amber-800">Hello 👋</p>
      <AuthButtonServer />
      <section className="mx-auto flex w-full max-w-[600px] flex-col gap-24">
        <QvsCreateForm />
        <QvsList qvs={qvs} />
      </section>
    </main>
  )
}
