"use client"

import { useEffect, useState } from "react"
import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Sonner
      theme="light"
      className="toast-group"
      style={
        {
          "--normal-bg": "#FBF6EC",
          "--normal-border": "#E8DCC4",
          "--normal-text": "#2B1A24",
          "--success-bg": "#5C3A4F",
          "--success-foreground": "#F5EDE0",
          "--error-bg": "#8B2F2F",
          "--error-foreground": "#F5EDE0",
        }
      }
      {...props}
    />
  )
}

export { Toaster }
