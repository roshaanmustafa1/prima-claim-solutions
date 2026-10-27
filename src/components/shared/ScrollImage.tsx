"use client"

import { useRef } from "react"
import Image from "next/image"
import { m, useScroll, useSpring, useTransform } from "framer-motion"
import { useSiteMotion } from "@/components/layout/MotionPreferences"

interface ScrollImageProps {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}

export function ScrollImage({ src, alt, sizes, priority = false, className = "" }: ScrollImageProps) {
  const target = useRef<HTMLDivElement>(null)
  const { enabled } = useSiteMotion()
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const y = useTransform(progress, [0, 1], ["-5%", "5%"])
  const scale = useTransform(progress, [0, 1], [1.12, 1.02])

  return (
    <div ref={target} className="absolute inset-0 overflow-hidden">
      <m.div className="absolute inset-x-0 -inset-y-[8%]" style={{ y: enabled ? y : 0, scale: enabled ? scale : 1 }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />
      </m.div>
    </div>
  )
}
