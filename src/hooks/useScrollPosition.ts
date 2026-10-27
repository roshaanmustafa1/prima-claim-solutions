"use client"

import { useState, useEffect } from "react"

export function useScrollPosition(threshold = 20, resetThreshold = threshold) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let frameId: number | null = null
    let scrolled = false

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY
      const nextScrolled = currentScrollY > (scrolled ? resetThreshold : threshold)
      if (nextScrolled !== scrolled) {
        scrolled = nextScrolled
        setIsScrolled(nextScrolled)
      }
      frameId = null
    }

    const onScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrollPosition)
      }
    }

    // Initial check
    updateScrollPosition()

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frameId !== null) window.cancelAnimationFrame(frameId)
    }
  }, [threshold, resetThreshold])

  return { isScrolled }
}
