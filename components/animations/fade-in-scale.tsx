"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type React from "react"

interface FadeInScaleProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeInScale({ children, delay = 0, duration = 800, className = "" }: FadeInScaleProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transform: isIntersecting ? "scale(1)" : "scale(0.9)",
        opacity: isIntersecting ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}
