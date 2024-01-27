import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <SignUp />
    </div>
  )
}
