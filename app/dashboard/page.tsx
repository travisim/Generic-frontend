"use client"

import { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import DashboardContent from "../../components/DashboardContent"



export default function Web() {
  return (
    <div>
      <Header />
      <main>
        <DashboardContent />
      </main>
      <Footer />
    </div>
  )
}
