import * as React from "react"
import { cn } from "./utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-[#DDC9B0] bg-[#F5EDE0] px-3 py-2 text-sm ring-offset-background placeholder:text-[#8E5A7B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C3A4F] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
