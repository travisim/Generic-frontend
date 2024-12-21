import Link from "next/link"
import { Button } from "@/components/Button"
import { TextAreaField,TextField } from "@/components/Fields"

import { Logo } from "@/components/Logo"
import { SlimLayout } from "@/components/SlimLayout"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
}

export default function Contact() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">Contact Us</h2>
      <p className="mt-2 text-sm text-gray-700">
        Have any questions or feedback? Fill out the form below to get in touch with us.
      </p>
      <form action="/contact" method="post" className="mt-10 grid grid-cols-1 gap-y-8">
        <TextField label="Name" name="name" type="text" autoComplete="name" required />
        <TextField label="Email address" name="email" type="email" autoComplete="email" required />
        <TextField label="Subject" name="subject" type="text" required />

        <TextAreaField label="Message" name="message" required />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </SlimLayout>
  )
}
