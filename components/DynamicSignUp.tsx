// app/components/DynamicSignUp.tsx
"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/Button"
import { SelectField, TextField } from "@/components/Fields"

const DynamicSignUp: React.FC = () => {
  const router = useRouter()
  const [userType, setUserType] = useState<string>("Social")
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
      <TextField
        className="col-span-full"
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
        onChange={handleChange}
      />

      <SelectField
        className="col-span-full"
        label="User Type"
        name="user_type"
        onChange={(e) => {
          handleUserTypeChange(e)
          handleChange(e)
        }}
        value={userType}
        required
      >
        <option value=""></option>
        <option value="Social">Social Impact Firm</option>
        <option value="Corporations">Corporations</option>
      </SelectField>

      {userType === "Social" && (
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
            label="Types of by-products processed?"
            name="processing_services"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="food_waste">Food Waste</option>
            <option value="food_pulp">Food Pulp</option>
            <option value="plastic">Plastic</option>
            <option value="others">Others</option>
          </SelectField>

          <SelectField
            label="Industry for final processed goods?"
            name="final_goods_industry"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="manufacturing">Manufacturing</option>
            <option value="food_and_beverage">Food & Beverage</option>
            <option value="home">Home Furnishings</option>
            <option value="others">Others</option>
          </SelectField>

          <SelectField
            label="Ideal monthly volume of by-products?"
            name="ideal_volume_per_month"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="mncs">MNCs</option>
            <option value="startups">Startups</option>
          </SelectField>
          <TextField
            label="Expected processing price per kg?"
            name="processing_price_per_kg"
            type="number"
            pattern="[0-9]*"
            required
            onChange={handleChange}
          />
          <TextField
            className="col-span-full"
            label="Description of services provided?"
            name="description_of_services"
            type="text"
            required
            onChange={handleChange}
          />
          <SelectField
            className="col-span-full"
            label="Location of Processing Facility"
            name="location_of_repurposable_products"
            required
            onChange={handleChange}
          >
            <option value=""> </option>

            <option value="East">East</option>
            <option value="West">West</option>
            <option value="Central">Central</option>
            <option value="North">North</option>
          </SelectField>
        </>
      )}

      {userType === "Corporations" && (
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
            label="Waste by products for repurposing available"
            name="waste_by_products_available"
            required
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="grain_pulp">Grain Pulp</option>
            <option value="food_waste">Food Waste</option>
            <option value="type_1_plastic">Type 1 plastic(PET or PETE)</option>
            <option value="type_2_plastic">Type 2 plastic(HDPE (High density polyethylene))</option>
          </SelectField>

          <TextField
            label="Ideal monthly volume of by-products?"
            name="ideal_volume_per_month"
            type="number"
            pattern="[0-9]*"
            required
            onChange={handleChange}
          />
          <TextField
            label="Expected processing price per kg?"
            name="expected_processing_price_per_kg"
            type="number"
            pattern="[0-9]*"
            required
            onChange={handleChange}
          />
          <SelectField
            className="col-span-full"
            label="Location of where repurposable products are produced"
            name="location_of_repurposable_products"
            required
            onChange={handleChange}
          >
            <option value=""> </option>
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="Central">Central</option>
            <option value="North">North</option>
          </SelectField>
        </>
      )}

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
            Sign Up <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
        <p className="mt-2 text-center text-sm text-gray-500">
          By agreeing to register, you agree to recieve updates to features on our site.
        </p>
      </div>
    </form>
  )
}

export default DynamicSignUp
