"use client"

import React, { useState } from "react"
import { ArrowsUpDownIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const byproducts = {
  "Coffee Grounds": {
    name: "Coffee Grounds",
    rate: 5.32451,
    unit: "kg",
    color: "bg-brown-600",
    routing: [
      { firm: "Moonbeam Co", location: "Singapore", process: "Initial Processing", proportion: 60 },
      { firm: "Revive Coffee", location: "Singapore", process: "Final Production", proportion: 40 },
    ],
  },
  "Spent Grains": {
    name: "Spent Grains",
    rate: 4.76543,
    unit: "kg",
    color: "bg-amber-700",
    routing: [{ firm: "Moonbeam Co", location: "Singapore", process: "Cookie Production", proportion: 100 }],
  },
  "Plastic (Type 1)": {
    name: "Plastic (Type 1)",
    rate: 3.45678,
    unit: "kg",
    color: "bg-blue-500",
    routing: [
      { firm: "Plastify", location: "Singapore", process: "Plastic Processing", proportion: 70 },
      { firm: "Semula", location: "Singapore", process: "Plastic Processing", proportion: 30 },
    ],
  },
  "Plastic (Type 2)": {
    name: "Plastic (Type 2)",
    rate: 3.23456,
    unit: "kg",
    color: "bg-cyan-600",
    routing: [
      { firm: "Plastify", location: "Singapore", process: "Plastic Processing", proportion: 80 },
      { firm: "Semula", location: "Singapore", process: "Plastic Processing", proportion: 20 },
    ],
  },
}

const outputProducts = {
  "Carbon Credits": {
    name: "Carbon Credits",
    value: 1,
    unit: "credits",
  },
  Biochar: {
    name: "Biochar",
    value: 0.8,
    unit: "kg",
  },
}

const CarbonSwap = () => {
  const [byproductAmount, setByproductAmount] = useState("1000")
  const [selectedByproduct, setSelectedByproduct] = useState<keyof typeof byproducts>("Coffee Grounds")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedOutput, setSelectedOutput] = useState<keyof typeof outputProducts>("Carbon Credits")

  const handleByproductSelect = (byproduct: keyof typeof byproducts) => {
    setSelectedByproduct(byproduct)
    setDropdownOpen(false)
  }

  const estimatedCredits = (parseFloat(byproductAmount) * byproducts[selectedByproduct].rate).toFixed(2)

  return (
    <div>
      <div className="px- mx-auto flex max-w-7xl items-baseline justify-between border-b border-gray-200 pb-6 pt-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">Sourcing</h1>
      </div>
      <div className="mx-auto max-w-md p-6">
        <div className="rounded-xl bg-white p-6 shadow-md">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="mb-2 flex items-center justify-between">
                <input
                  type="text"
                  value={byproductAmount}
                  onChange={(e) => setByproductAmount(e.target.value)}
                  className="w-1/2 bg-transparent text-2xl font-medium text-gray-900 focus:outline-none"
                  placeholder="0.0"
                />
                <div className="relative">
                  <button
                    className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <div className={`mr-2 h-3 w-3 rounded-full ${byproducts[selectedByproduct].color}`} />
                    {byproducts[selectedByproduct].name}
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {Object.keys(byproducts).map((byproduct) => (
                          <button
                            key={byproduct}
                            onClick={() => handleByproductSelect(byproduct as keyof typeof byproducts)}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {byproducts[byproduct as keyof typeof byproducts].name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-sm text-gray-500">Unit: {byproducts[selectedByproduct].unit}</div>

              {/* Routing Information */}
              <RoutingInfo routes={byproducts[selectedByproduct].routing} />
            </div>

            {/* Swap Icon */}
            <div className="flex justify-center">
              <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
                <ArrowsUpDownIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {/* Output Section */}
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="mb-2 flex items-center justify-between">
                <input
                  type="text"
                  value={estimatedCredits}
                  readOnly
                  className="w-1/2 bg-transparent text-2xl font-medium text-gray-900 focus:outline-none"
                  placeholder="0.0"
                />
                <button
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setSelectedOutput(selectedOutput === "Carbon Credits" ? "Biochar" : "Carbon Credits")}
                >
                  <div className="mr-2 h-3 w-3 rounded-full bg-blue-600" />
                  {outputProducts[selectedOutput].name}
                  <ChevronDownIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="text-sm text-gray-500">Unit: {outputProducts[selectedOutput].unit}</div>
            </div>

            {/* Exchange Rate */}
            <div className="rounded-lg bg-gray-100 p-3 text-sm text-gray-500">
              <div>Exchange Rate:</div>
              <div>
                π 1 Ton {byproducts[selectedByproduct].name} = {byproducts[selectedByproduct].rate}{" "}
                {outputProducts[selectedOutput].name} ({byproducts[selectedByproduct].unit})
              </div>
              <div>
                Value: ${(byproducts[selectedByproduct].rate * outputProducts[selectedOutput].value).toFixed(2)}{" "}
                {outputProducts[selectedOutput].unit}
              </div>
            </div>

            {/* Routing Information */}
            <RoutingInfo routes={byproducts[selectedByproduct].routing} />

            {/* Action Button */}
            <Link href="/sourcingDetails">
              <button className="w-full rounded-xl bg-green-600 px-4 py-3 font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Confirm Swap
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Route {
  firm: string
  location: string
  process: string
  proportion: number
}

const RoutingInfo = ({ routes }: { routes: Route[] }) => (
  <div className="mt-1 space-y-1 rounded bg-gray-100 p-2 text-xs text-gray-500">
    <div className="font-medium">Routing Information:</div>
    {routes.map((route, index) => (
      <div key={index} className="flex items-center">
        <div className="mr-2 h-2 w-2 rounded-full bg-green-500" />
        <span className="font-medium">{route.firm}</span>
        <span className="mx-1">→</span>
        <span>{route.process}</span>
        <span className="ml-2">({route.proportion}%)</span>
      </div>
    ))}
  </div>
)

export default CarbonSwap
