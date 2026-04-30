import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "./utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#5C3A4F] text-[#F5EDE0] hover:bg-[#4A2F3F]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[#DDC9B0] bg-transparent hover:bg-[#E8DCC4] hover:text-[#2B1A24]",
        secondary: "bg-[#E8DCC4] text-[#2B1A24] hover:bg-[#DDC9B0]",
        ghost: "hover:bg-[#E8DCC4] hover:text-[#2B1A24]",
        link: "text-[#5C3A4F] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
