import { createSupabaseServerClient } from '@/sections/shared/supabase/supabaseServerClient'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function QvsCreate() {
  const addPost = async (formData: FormData) => {
    'use server'
    const supabase = createSupabaseServerClient()
    const content = formData.get('content') as string

    if (content.length <= 0) return

    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (user === null) return

    await supabase.from('quvis').insert({ content, user_id: user.id })
  }
  return (
    <form action={addPost} className="flex flex-col gap-y-4">
      <Textarea
        name="content"
        placeholder="Send a QV"
        className="border-white border-opacity-20 bg-bg-qvs ring-offset-white/90 focus-visible:ring-0 focus-visible:ring-offset-1 focus-visible:ring-offset-white/50"
        rows={4}
      />
      <Button type="submit" className="self-end rounded-full bg-primary">
        Send
      </Button>
    </form>
  )
}
