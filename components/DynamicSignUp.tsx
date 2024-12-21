// app/components/DynamicSignUp.tsx
"use client"


import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/Button"
import { SelectField, TextField } from "@/components/Fields"


const DynamicSignUp: React.FC = () => {
 const router = useRouter()
  const [userType, setUserType] = useState<string>("jobseeker")
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(event.target.value)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, userType }),
      })
      if (response.ok) {
        // alert("Form submitted successfully")
    router.push("/success")
        // Reset form or redirect user
      } else {
        alert("Error submitting form")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error submitting form")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
      <TextField
        label="First name"
        name="first_name"
        type="text"
        autoComplete="given-name"
        required
        onChange={handleChange}
      />
      <TextField
        label="Last name"
        name="last_name"
        type="text"
        autoComplete="family-name"
        required
        onChange={handleChange}
      />
      <TextField
        className="col-span-full"
        label="Email Address"
        name="email"
        type="email"
        autoComplete="email"
        required
        onChange={handleChange}
      />

      <SelectField
        className="col-span-full"
        label="User Type"
        name="userType"
        onChange={(e) => {
          handleUserTypeChange(e)
          handleChange(e)
        }}
        value={userType}
        required
      >
        <option value=""></option>
        <option value="jobseeker">Jobseeker</option>
        <option value="employer">Employer</option>
      </SelectField>

      {userType === "jobseeker" && (
        <>
          <SelectField className="col-span-full" label="University" name="university" required onChange={handleChange}>
            <option value=""></option>
            <option value="nus">NUS</option>
            <option value="ntu">NTU</option>
            <option value="smu">SMU</option>
          </SelectField>
          <TextField
            className="col-span-full"
            label="How many job applications did you make to get one job?"
            name="job_application_count"
            type="number"
            pattern="[0-9]*"
            required
            onChange={handleChange}
          />
          <SelectField
            label="Do you prefer MNCs or startups for your internships?"
            name="company_preference"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="mncs">MNCs</option>
            <option value="startups">Startups</option>
          </SelectField>
          <SelectField
            label="Is the current job application process too long?"
            name="job_application_process_length"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </SelectField>
          <SelectField
            className="col-span-full"
            label="Graduate or undergraduate?"
            name="degree_level_preference"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
          </SelectField>
          <SelectField className="col-span-full" label="Degree" name="degree" required onChange={handleChange}>
            <option value=""></option>
            <option value="computer_science">Computer Science</option>
            <option value="business_administration">Business Administration</option>
            <option value="arts_and_social_sciences">Arts and Social Sciences</option>
            <option value="others">Others</option>
          </SelectField>
        </>
      )}

      {userType === "employer" && (
        <>
          <TextField
            className="col-span-full"
            label="Company Name"
            name="company_name"
            autoComplete="organization"
            required
            onChange={handleChange}
          />
          <SelectField
            className="col-span-full"
            label="Are you able to make purchasing decisions at your practice?"
            name="purchasing_decisions"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </SelectField>
          <TextField
            label="How many HR staff is at your practice?"
            name="hr_staff_count"
            type="number"
            pattern="[0-9]*"
            required
            onChange={handleChange}
          />
          <TextField
            label="Number of interns you are looking to hire"
            name="intern_hire_count"
            type="number"
            pattern="[0-9]*"
            required
            onChange={handleChange}
          />
          <SelectField
            className="col-span-full"
            label="Who are you looking for?"
            name="student_preference"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="phd">PhD</option>
          </SelectField>
          <SelectField
            className="col-span-full"
            label="Which course are you looking for?"
            name="course_preference"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="cs">Computer Science</option>
            <option value="business_analytics">Business Analytics</option>
            <option value="cyber_security">Cyber Security</option>
            <option value="info_system">Information Systems</option>
            <option value="bba">Business Administration</option>
            <option value="accountancy">Accountancy</option>
            <option value="real_estate">Real Estate</option>
            <option value="arts_and_social_sciences">Arts and Social Sciences</option>
            <option value="engineering">Engineering</option>
            <option value="mechanical_eng">Mechanical Engineering</option>
            <option value="electrical_eng">Electrical Engineering</option>
            <option value="law">Law</option>
            <option value="medicine">Medicine</option>
            <option value="science">Science</option>
            <option value="music">Music</option>
            <option value="public_policy">Public Policy</option>
            <option value="quantitative_finance">Quantitative Finance</option>
            <option value="others">Others</option>
          </SelectField>
        </>
      )}
      {/* <TextField
        className="col-span-full"
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
        onChange={handleChange}
      /> */}
      <SelectField
        className="col-span-full"
        label="How did you hear about us?"
        name="referral_source"
        onChange={handleChange}
        required
      >
        <option value=""></option>
        <option value="nus_hanger">NUS Hanger</option>
        <option value="telegram">Telegram</option>
        <option value="search_engine">Search Engine</option>
        <option value="posters">Posters</option>
      </SelectField>
      <div className="col-span-full">
        <Button type="submit" variant="solid" color="blue" className="w-full">
          <span>
            Join Waitlist <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
        <p className="mt-2 text-center text-sm text-gray-500">
          By agreeing to join the waitlist, you agree to recieve updates to features on our site.
        </p>
      </div>
    </form>
  )
}

export default DynamicSignUp
