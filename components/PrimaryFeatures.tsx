"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import clsx from "clsx"

import { Container } from "@/components/Container"
import backgroundImage from "@/images/background-features.jpg"
import screenshotExpenses from "@/images/screenshots/expenses.png"
import screenshotPayroll from "@/images/screenshots/payroll.png"
import screenshotReporting from "@/images/screenshots/reporting.png"
import screenshotVatReturns from "@/images/screenshots/vat-returns.png"
import logoTick from "@/images/logos/tick.png"

const features = [
  // {
  //   title: 'Easy Apply',
  //   description:
  //     "With 1 click, .",
  //   // image: screenshotPayroll,
  // },
  {
    title: "Smart Sourcing",
    description: "We find the best social impact firm to make your supply chain more sustainable.",
    // image: screenshotExpenses,
    icon: logoTick,
  },
  {
    title: "Verifiable",
    description: "We ensure that these social impact firms you are working with are legitimate.",
    // image: screenshotVatReturns,
    icon: logoTick,
  },
  {
    title: "Offset Carbon",
    description: "We help you offset your carbon footprint in accordance with the Paris Agreement.",
    // image: screenshotVatReturns,
    icon: logoTick,
  },
  // {
  //   title: 'Insights',
  //   description:
  //     'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
  //   // image: screenshotReporting,
  // },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<"horizontal" | "vertical">("horizontal")

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)")

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal")
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener("change", onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-green-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-0 top-1/2 h-auto w-full -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
        priority
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-whpite sm:text-4xl md:text-5xl">
            We help you discover the best impact opportunities
          </h2>
          {/* <p className="mt-6 text-lg tracking-tight text-blue-100">
            Job applications are tedious to apply. We make it easy.
          </p> */}
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="bg-black-600 absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <Image src={feature.icon} alt={feature.title} height={100} unoptimized />
                    {/* <feature.icon aria-hidden="true" className="h-6 w-6 text-white" /> */}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
