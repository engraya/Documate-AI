import { SignUp } from '@clerk/nextjs'
import Image from "next/image";
export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
}

export default function SignUpPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div  className="mx-auto mt-6 flex items-center justify-center" >
            <Image src="" height={40} width={40} alt="logo"/>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <SignUp />
        </div>
      </div>
    </div>
  )
}
