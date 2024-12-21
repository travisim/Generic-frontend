import { Inter, Lexend } from "next/font/google"
import clsx from "clsx"
import { Analytics } from "@vercel/analytics/react"
import "@/styles/tailwind.css"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s - Linkify",
    default: "Linkify - Easily apply for internships and employment",
  },
  description:
    "Job application forms are tedious to apply. We make it easy, so you can focus on your skills.",
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx("h-full scroll-smooth bg-white antialiased", inter.variable, lexend.variable)}>
      <Analytics />
      <head>
        <meta property="og:image" content="" />
      </head>
      <body className=" flex-col">{children}</body>
    </html>
  )
}
