import React from "react"
import Image from "next/image"
import logo from "@/images/logos/impactify.png"

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
<div className="flex items-center">
      {/* <text x="10" y="30" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="#2563EB">
        Impactify
      </text> */}
      <Image src={logo} alt="Impactify" width={190} height={40} unoptimized />
</div>
  )
}
