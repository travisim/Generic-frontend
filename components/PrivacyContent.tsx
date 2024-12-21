import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Singapore Job Application Service",
  description:
    "Privacy Policy for our job application service - Learn how we protect your personal information when you apply for jobs through our platform.",
}

const PrivacyContent = () => {
  return (
    <div className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-xl">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">Last updated: September 24, 2024</p>
        </div>
        <div className="mt-12 space-y-8 text-gray-500">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
            <p className="mt-2">
              Welcome to our job application service. We are committed to protecting your personal data in compliance
              with the Personal Data Protection Act 2012 (PDPA) of Singapore. This Privacy Policy explains how we
              collect, use, disclose, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
            <p className="mt-2">
              We collect personal information that you provide when using our job application service, including but not
              limited to:
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Full name</li>
              <li>Contact information (email address, phone number)</li>
              <li>Residential address</li>
              <li>Educational background</li>
              <li>Work experience</li>
              <li>Skills and qualifications</li>
              <li>Resume/CV</li>
              <li>References</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
            <p className="mt-2">We use the collected information to:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Facilitate job applications on your behalf</li>
              <li>Match you with potential employers</li>
              <li>Communicate with you about job opportunities</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Disclosure of Your Information</h2>
            <p className="mt-2">We may share your information with:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Potential employers when you apply for their job openings</li>
              <li>Service providers who assist us in operating our platform</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Data Security</h2>
            <p className="mt-2">
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Your Rights</h2>
            <p className="mt-2">Under the PDPA, you have the right to:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Access your personal data</li>
              <li>Correct errors or omissions in your personal data</li>
              <li>Withdraw consent for the collection, use, or disclosure of your personal data</li>
              <li>Request the deletion of your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Contact Us</h2>
            <p className="mt-2">
              If you have any questions about this privacy policy or wish to exercise your rights, please contact our
              Data Protection Officer at:
            </p>
            <p className="mt-2">
              Email: Privacy@Impactifyai.com
              <br />
              {/* Address: 123 Employment Street, #01-01, Singapore 123456 */}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyContent
