export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 190 40" {...props}>
      <text x="10" y="30" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="#2563EB">
        Impactify
      </text>
    </svg>
  )
}
