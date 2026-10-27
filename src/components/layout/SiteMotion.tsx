"use client"

import { useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { useAnimate } from "framer-motion/mini"
import { useSiteMotion } from "@/components/layout/MotionPreferences"

export function SiteMotion({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate<HTMLElement>()
  const { enabled } = useSiteMotion()
  const pathname = usePathname()

  useEffect(() => {
    const root = scope.current
    if (!root || !enabled || !("IntersectionObserver" in window)) return

    const explicitTargets = Array.from(root.ownerDocument.querySelectorAll<HTMLElement>("[data-reveal]"))
    const sectionTargets = Array.from(root.querySelectorAll<HTMLElement>(":scope > section:not(:first-child):not([data-reveal-managed]) > .site-container"))
      .filter((element) => !element.hasAttribute("data-reveal") && !element.querySelector("[data-reveal]"))
    const targets = [...explicitTargets, ...sectionTargets]
    const animations = new Map<HTMLElement, ReturnType<typeof animate>>()
    const originalStyles = new Map<HTMLElement, string | null>()

    const getEntrance = (element: HTMLElement) => {
      const direction = element.dataset.reveal
      return {
        x: direction === "left" ? -64 : direction === "right" ? 64 : 0,
        y: direction === "left" || direction === "right" ? 0 : 64,
        scale: direction === "zoom" ? 0.9 : 1,
      }
    }

    const prepare = (element: HTMLElement) => {
      const { x, y, scale } = getEntrance(element)
      animations.get(element)?.stop()
      element.style.opacity = "0"
      element.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
    }

    const reveal = (element: HTMLElement) => {
      const entrance = getEntrance(element)
      animations.set(element, animate(element, {
        opacity: [0, 1],
        transform: [`translate3d(${entrance.x}px, ${entrance.y}px, 0) scale(${entrance.scale})`, "none"],
      }, {
        duration: 1,
        delay: Number(element.dataset.revealDelay || 0),
        ease: [0.22, 1, 0.36, 1],
      }))
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement
        if (!entry.isIntersecting) return
        observer.unobserve(element)
        reveal(element)
      })
    }, { threshold: 0.12, rootMargin: "0px 0px -48px 0px" })

    targets.forEach((element) => {
      const bounds = element.getBoundingClientRect()
      if (bounds.bottom <= 0) return
      originalStyles.set(element, element.getAttribute("style"))
      prepare(element)
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      animations.forEach((animation) => animation.stop())
      originalStyles.forEach((style, element) => {
        if (style === null) element.removeAttribute("style")
        else element.setAttribute("style", style)
      })
    }
  }, [pathname, enabled, scope, animate])

  return <main id="main-content" ref={scope} className="overflow-x-clip">{children}</main>
}
