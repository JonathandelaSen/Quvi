import { AuthButtonServer } from '@/sections/shared/components/auth-button-server'

export default function Login () {
  return (
        <section className="flex flex-col items-center min-h-screen">
            <h1>Incia sesión</h1>
            <AuthButtonServer/>
        </section>
  )
}
