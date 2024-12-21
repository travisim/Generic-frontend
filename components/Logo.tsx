export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 140 40" {...props}>
      <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="#2563EB">
        Linkify
      </text>
    </svg>
  )
}
