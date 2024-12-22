"use client"

import { Fragment, useState } from "react"
import { Dialog, Menu, Transition } from "@headlessui/react"
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  EllipsisHorizontalIcon,
  PlusSmallIcon,
} from "@heroicons/react/20/solid"
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline"

const secondaryNavigation = [
  { name: "Last 7 days", href: "#", current: true },
  { name: "Last 30 days", href: "#", current: false },
  { name: "All-time", href: "#", current: false },
]
const stats = [
  { name: "Revenue", value: "SGD 4091.00", change: "+4.75%", changeType: "positive" },
  { name: "Carbon Credits", value: "1277.00 tCO2e", change: "+54.02%", changeType: "positive" },
  { name: "By products Recycled", value: "1943 kg", change: "+1.39%", changeType: "positive" },
  { name: "Expenses", value: "SGD 3015.00", change: "-10.18%", changeType: "negative" },
]
const statuses: { [key: string]: string } = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
}
const days = [
  {
    dateTime: "2024-12-22",
    date: "December 22, 2024",
    transactions: [
      {
        id: 1,
        amount: "SGD 1,200.00",
        status: "Paid",
        client: "Semula",
        description: "Invoice #123",
        href: "#",
        invoiceNumber: "123",
        tax: "SGD 100.00",
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        amount: "SGD 2,500.00",
        status: "Overdue",
        client: "Plastify",
        description: "Invoice #124",
        href: "#",
        invoiceNumber: "124",
        tax: "SGD 200.00",
        icon: ArrowDownCircleIcon,
      },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function DashboardContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <main>
        <div className="mx-auto flex max-w-7xl items-baseline justify-between border-b border-gray-200 px-4 pb-6 pt-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
        <div className="relative isolate overflow-hidden pt-16">
          {/* Secondary navigation */}
          <header className="pb-4 pt-6 sm:pb-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <h1 className="text-base font-semibold leading-7 text-gray-900">Cashflow</h1>
              <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
                {secondaryNavigation.map((item) => (
                  <a key={item.name} href={item.href} className={item.current ? "text-indigo-600" : "text-gray-700"}>
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="ml-auto flex items-center gap-x-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
                New transaction
              </a>
            </div>
          </header>

          {/* Stats */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                  <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
                  <dd
                    className={`mt-1 text-sm font-semibold ${
                      stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Transactions */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div><br></br></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
                Recent activity
              </h2>
            </div>
            <div className="mt-6 overflow-hidden shadow sm:rounded-md">
              <ul role="list" className="divide-y divide-gray-200">
                {days.map((day) => (
                  <li key={day.dateTime} className="bg-white px-4 py-5 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">{day.date}</p>
                    </div>
                    <div className="mt-2">
                      <ul role="list" className="divide-y divide-gray-200">
                        {day.transactions.map((transaction) => (
                          <li key={transaction.id} className="py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <transaction.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                <p className="ml-2 text-sm font-medium text-gray-900">{transaction.amount}</p>
                              </div>
                              <div className="flex items-center">
                                <p className={`text-sm font-medium ${statuses[transaction.status]}`}>
                                  {transaction.status}
                                </p>
                                <p className="ml-4 text-sm text-gray-500">{transaction.client}</p>
                              </div>
                            </div>
                            <div className="mt-2 text-sm text-gray-500">{transaction.description}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
