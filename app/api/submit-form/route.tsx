// app/api/submit-form/route.ts
import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"
// import bcrypt from "bcryptjs"
// Define the expected shape of the form data
interface FormData {
  userType: "jobseeker" | "employer"
  first_name: string
  last_name: string
  email: string
  referral_source: string
  // Add other common fields here

  // Jobseeker specific fields
  university?: string
  job_application_count?: string
  company_preference?: string
  job_application_process_length?: string
  degree_level_preference?: string
  degree?: string

  // Employer specific fields
  company_name?: string
  purchasing_decisions?: string
  hr_staff_count?: string
  intern_hire_count?: string
  student_preference?: string
  course_preference?: string
}

// Type guard function
function isValidFormData(data: any): data is FormData {
  return (
    typeof data === "object" &&
    data !== null &&
    "userType" in data &&
    (data.userType === "jobseeker" || data.userType === "employer")
  )
}
export async function POST(request: Request) {
  try {
    const body = await request.json()


    if (!isValidFormData(body)) {
      return NextResponse.json({ message: "Invalid form data" }, { status: 400 })
    }

    const { userType, ...formData } = body
    console.log(formData)

  

     if (userType === "jobseeker") {
       await sql`
        INSERT INTO jobseekers (
          first_name, last_name, email, university, job_application_count, 
          company_preference, job_application_process_length, degree_level_preference, 
          degree, referral_source
        ) VALUES (
          ${formData.first_name}, ${formData.last_name}, ${formData.email}, 
          ${formData.university}, ${formData.job_application_count}, 
          ${formData.company_preference}, ${formData.job_application_process_length}, 
          ${formData.degree_level_preference}, ${formData.degree}, 
          ${formData.referral_source}
        )
      `
     } else if (userType === "employer") {
       await sql`
        INSERT INTO employers (
          first_name, last_name, email, company_name, purchasing_decisions, 
          hr_staff_count, intern_hire_count, student_preference, course_preference, 
          referral_source
        ) VALUES (
          ${formData.first_name}, ${formData.last_name}, ${formData.email}, 
          ${formData.company_name}, ${formData.purchasing_decisions}, 
          ${formData.hr_staff_count}, ${formData.intern_hire_count}, 
          ${formData.student_preference}, ${formData.course_preference}, 
          ${formData.referral_source}
        )
      `
     }

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error inserting data:", error)
    return NextResponse.json({ message: "Error submitting form" }, { status: 500 })
  }
}
