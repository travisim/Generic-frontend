import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Who runs Linkify?',
      answer:
        'NUS CS students who faced internship woes and decided to solve make applying for internships a better experiece.',
    },
    {
      question: 'How do I apply for a internship/job at Linkify?',
      answer:
        'Apply through our platform. if you are a match for us, you will recieve notice on Linkify like the other firms on our platform.',
    },
  ],
  [
    {
      question: 'Which degree programme students can use Linkify ?',
      answer:
        'Linkify is currently optimised for internships commonly associated with Computer Science and Business Administration students. if you are from other faculties, and are interested in the jobs we have, feel free to join Linkify.',
    },
    {
      question:
        'Why did we start Linkify',
      answer:
        'The current job application process is tedious, filling in many forms, tracking deadlines, reading job descriptions. We want to make it easier for students to apply for internships and jobs.',
    },
    // {
    //   question:
    //     'I found other companies called Linkify, are you sure you can use this name?',
    //   answer:
    //     'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
    // },
  ],
  // [
  //   {
  //     question: 'How do you generate reports?',
  //     answer:
  //       'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
  //   },
  //   {
  //     question: 'Can we expect more inventory features?',
  //     answer: 'In life it’s really better to never expect anything at all.',
  //   },
  //   {
  //     question: 'I lost my password, how do I get into my account?',
  //     answer:
  //       'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
  //   },
  // ],
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
