"use client"

import { useRef, type ReactNode } from "react"
import { m, useInView } from "framer-motion"
import { useSiteMotion } from "@/components/layout/MotionPreferences"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  contentClassName?: string
  as?: "div" | "figure"
  direction?: "left" | "right"
  delay?: number
}

export function ScrollReveal({ children, className, contentClassName, as = "div", direction = "left", delay = 0 }: ScrollRevealProps) {
  const target = useRef<HTMLDivElement>(null)
  const { enabled } = useSiteMotion()
  const inView = useInView(target, { once: true, amount: 0.15, margin: "0px 0px -32px 0px" })
  const visible = !enabled || inView
  const Element = as === "figure" ? m.figure : m.div

  return (
    <div ref={target} className={className}>
      <Element
        className={contentClassName}
        initial={false}
        animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : direction === "left" ? -40 : 40 }}
        transition={{ duration: enabled ? 0.85 : 0, delay: visible && enabled ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Element>
    </div>
  )
}
