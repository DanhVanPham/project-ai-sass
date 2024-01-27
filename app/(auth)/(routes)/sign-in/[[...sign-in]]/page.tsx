import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <SignIn />
    </div>
  )
}
