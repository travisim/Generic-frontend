import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"

interface FormData {
  userType: "Social" | "Business" | "Individual"
  first_name: string
  last_name: string
  email: string
  byproduct_type: string
  byproduct_amount: number
  unit: string
  processing_method: string
  expected_output: string
  ideal_volume_per_month: number
  company_name?: string
  referral_source: string
  contact_number?: string
  business_type?: string
  business_size?: string
  industry_sector?: string
}

function isValidFormData(data: any): data is FormData {
  return (
    typeof data === "object" &&
    data !== null &&
    "userType" in data &&
    ["Social", "Business", "Individual"].includes(data.userType)
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!isValidFormData(body)) {
      return NextResponse.json({ message: "Invalid form data" }, { status: 400 })
    }

    const { userType, ...formData } = body

    if (userType === "Social") {
      await sql`
        INSERT INTO users (
          first_name, last_name, email, byproduct_type, byproduct_amount,
          unit, processing_method, expected_output, ideal_volume_per_month,
          referral_source, contact_number, user_type
        ) VALUES (
          ${formData.first_name}, ${formData.last_name}, ${formData.email},
          ${formData.byproduct_type}, ${formData.byproduct_amount}, ${formData.unit},
          ${formData.processing_method}, ${formData.expected_output},
          ${formData.ideal_volume_per_month}, ${formData.referral_source},
          ${formData.contact_number}, ${userType}
        )
      `
    } else if (userType === "Business") {
      await sql`
        INSERT INTO users (
          first_name, last_name, email, byproduct_type, byproduct_amount,
          unit, processing_method, expected_output, ideal_volume_per_month,
          company_name, referral_source, contact_number, business_type,
          business_size, industry_sector, user_type
        ) VALUES (
          ${formData.first_name}, ${formData.last_name}, ${formData.email},
          ${formData.byproduct_type}, ${formData.byproduct_amount}, ${formData.unit},
          ${formData.processing_method}, ${formData.expected_output},
          ${formData.ideal_volume_per_month}, ${formData.company_name},
          ${formData.referral_source}, ${formData.contact_number},
          ${formData.business_type}, ${formData.business_size},
          ${formData.industry_sector}, ${userType}
        )
      `
    } else {
      await sql`
        INSERT INTO users (
          first_name, last_name, email, byproduct_type, byproduct_amount,
          unit, processing_method, expected_output, ideal_volume_per_month,
          referral_source, contact_number, user_type
        ) VALUES (
          ${formData.first_name}, ${formData.last_name}, ${formData.email},
          ${formData.byproduct_type}, ${formData.byproduct_amount}, ${formData.unit},
          ${formData.processing_method}, ${formData.expected_output},
          ${formData.ideal_volume_per_month}, ${formData.referral_source},
          ${formData.contact_number}, ${userType}
        )
      `
    }

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ message: "Error registering user" }, { status: 500 })
  }
}
