import { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Success from "@/components/Success"

export const metadata: Metadata = {
  title: "Linkify",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://linkifyai.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url:  "@/images/logos/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <Header />
      <main>
        <Success />
      </main>
      <Footer />
    </>
  )
}