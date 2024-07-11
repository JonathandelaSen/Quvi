'use server'

import { createSupabaseServerClient } from '@/sections/shared/supabase/supabaseServerClient'
import { revalidatePath } from 'next/cache'
import { type CreateQvFormState } from '@/app/sections/qvs/qvs-create-form'

// TODO: add zod
// TODO: Move business logic to a application service so that we can reuse it in a controller if needed
const createQv = async (
  initialState: CreateQvFormState,
  formData: FormData
) => {
  const supabase = createSupabaseServerClient()
  const content = formData.get('content') as string

  if (content.length <= 0) {
    return { ...initialState, errorContent: 'Content is required' }
  }

  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (user === null) return initialState

  await supabase.from('quvis').insert({ content, user_id: user.id })
  revalidatePath('/') // TODO: Get current path

  return {
    errorContent: '',
    doneWithSuccess: true,
    submitCount: initialState.submitCount + 1
  }
}

export default createQv
