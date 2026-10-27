"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import { brandAssets } from "@/config/branding"
import { LazyMotion } from "framer-motion"

const loadMotionFeatures = () => import("@/lib/motionFeatures").then((module) => module.default)

const MotionContext = createContext({ enabled: false })

export function useSiteMotion() {
  return useContext(MotionContext)
}

export function MotionPreferences({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false)
  const [showEntrance, setShowEntrance] = useState(true)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    document.cookie = "primeclaim-motion=; Path=/; Max-Age=0; SameSite=Lax"
    delete document.documentElement.dataset.motion
    const update = () => setEnabled(!media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  return (
    <MotionContext.Provider value={{ enabled }}>
      <LazyMotion features={loadMotionFeatures} strict>
      {showEntrance && <div aria-hidden="true" className="site-entrance" onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) setShowEntrance(false)
      }}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#c3d1bc]">Medical billing. Personal attention.</span>
        <Image src={brandAssets.entrance} alt="Prime Claim Solutions" width={376} height={240} priority className="mt-6 h-auto w-56 sm:w-72" />
        <span className="entrance-rule mt-8 h-px w-24 bg-[#c3d1bc]" />
      </div>}
      {children}
      </LazyMotion>
    </MotionContext.Provider>
  )
}
