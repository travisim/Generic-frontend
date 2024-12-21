import { Metadata } from "next"
import { CallToAction } from "@/components/CallToAction"
import { Faqs } from "@/components/Faqs"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Pricing } from "@/components/Pricing"
import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { SecondaryFeatures } from "@/components/SecondaryFeatures"


import { Testimonials } from "@/components/Testimonials"

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
        url: "@/images/logos/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
