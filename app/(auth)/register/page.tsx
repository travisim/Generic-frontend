import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

import DynamicSignUp from "@/components/DynamicSignUp"


export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">Join the Waitlist Today</h2>
      {/* <p className="mt-2 text-sm text-gray-700">
        Already registered?{" "}
        <Link href="/login" className="font-medium text-blue-600 hover:underline">
          Sign in
        </Link>{" "}
        to your account.
      </p> */}
      <DynamicSignUp />
     
    </SlimLayout>
  )
}
