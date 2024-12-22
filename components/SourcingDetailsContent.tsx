import React from "react"

const SourcingDetailsContent = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Sourcing details</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Recyclables/Byproduct Drop-off Location */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Recyclables/Byproduct Drop-off Lococation</h2>
            <p className="text-gray-700">Partner: Semula</p>
            <p className="text-gray-700">Location: 71 Ayer Rajah Crescent, Singapore</p>
            <p className="text-gray-700">Drop-off Hours: 9 AM - 5 PM</p>
            <p className="text-gray-700">Contact: +65 1234 5678</p>
          </div>

          {/* Carbon Impact */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Carbon Impact</h2>
            <p className="text-gray-700">Total Carbon Credits Earned: 1500 credits</p>
            <p className="text-gray-700">Equivalent CO2 Reduction: 750 kg</p>
          </div>

          {/* Expected Delivery */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Expected Delivery</h2>
            <p className="text-gray-700">Next Delivery Date: 25th December 2024</p>
            <p className="text-gray-700">Delivery Status: On Schedule</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Timeline</h2>
          <ol className="relative border-l border-gray-200">
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                <svg
                  className="h-3 w-3 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900">Drop-off</h3>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400">20th December 2024</time>
              <p className="mb-4 text-base font-normal text-gray-500">
                Recyclables/Byproducts dropped off at the designated location.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                <svg
                  className="h-3 w-3 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900">Processing</h3>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400">21st December 2024</time>
              <p className="mb-4 text-base font-normal text-gray-500">
                Recyclables/Byproducts are being processed at the facility.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                <svg
                  className="h-3 w-3 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900">Expected Delivery</h3>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400">25th December 2024</time>
              <p className="mb-4 text-base font-normal text-gray-500">
                Processed products are expected to be delivered.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default SourcingDetailsContent
