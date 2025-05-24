"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type React from "react"

interface FadeInUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeInUp({ children, delay = 0, duration = 600, className = "" }: FadeInUpProps) {
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
        transform: isIntersecting ? "translateY(0)" : "translateY(30px)",
        opacity: isIntersecting ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}
