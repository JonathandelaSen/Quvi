import { type NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/sections/shared/supabase/supabaseServerClient'

export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code === null) {
    return new Response('No code', { status: 400 })
  }
  const supabase = createSupabaseServerClient()
  await supabase.auth.exchangeCodeForSession(code)

  return NextResponse.redirect(requestUrl.origin)
}
