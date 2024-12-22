import Image from "next/image"

import { Container } from "@/components/Container"
import backgroundImage from "@/images/background-faqs.jpg"

const faqs = [
  [
    {
      question: "What is Impactify?",
      answer:
        "Impactify is a platform that connects businesses and organizations with sustainable waste management solutions, helping convert byproducts into valuable resources through our network of processing partners.",
    },
    {
      question: "What types of waste can be processed?",
      answer:
        "We currently handle food waste (including spent grains and coffee grounds), and plastics (Type 1 PET/PETE and Type 2 HDPE). We're constantly expanding our processing capabilities through our partner network.",
    },
  ],
  [
    {
      question: "How does the process work?",
      answer:
        "Once you sign up, you can list your byproducts, specify volumes, and get matched with appropriate processing partners. Our platform handles the logistics, tracking, and carbon credit calculations automatically.",
    },
    {
      question: "What are the benefits of using Impactify?",
      answer:
        "Benefits include reduced waste management costs, potential revenue from byproduct conversion, carbon credits, and detailed sustainability reporting for ESG compliance.",
    },
  ],
  [
    {
      question: "Who can join Impactify?",
      answer:
        "We work with businesses of all sizes, social enterprises, and individuals committed to sustainable waste management. Our platform is particularly valuable for F&B businesses, manufacturers, and organizations with regular waste streams.",
    },
    {
      question: "How are carbon credits calculated?",
      answer:
        "Carbon credits are calculated based on the type and volume of waste diverted from landfills, the processing method used, and the final output product. All calculations are verified by third-party environmental auditors.",
    },
  ],
  [
    {
      question: "What happens to the processed waste?",
      answer:
        "Depending on the type of waste, it gets converted into various valuable products. For example, spent coffee grounds can become alternative coffee products, and plastic waste can be transformed into furniture or new packaging materials.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up on our platform, select your user type (Business, Social Enterprise, or Individual), and provide details about your waste stream. Our team will guide you through the process and connect you with suitable processing partners.",
    },
  ],
]

export function Faqs() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="faq-title" className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can&apos;t find what you&apos;re looking for, email our support team. We&apos;re here to help.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">{faq.question}</h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
