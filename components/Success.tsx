// components/Success.tsx
import Link from "next/link"
import { Button } from "@/components/Button"

const Success = () => {
  // return (
  

  return (
    <div>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-7xl">Thank You!</h1>
          <p className="mt-2 text-base leading-7 text-gray-600">Your submission is recieved</p>
 <div className="mt-4"></div>
          <Link href="/">
            <Button type="submit" variant="solid" color="blue" className="w-full">
              <span>
                Continue <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </Link>
         
        </div>
      </main>
    </div>
  )
}
  

export default Success
