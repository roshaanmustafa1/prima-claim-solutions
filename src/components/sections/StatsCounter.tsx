"use client"

import React, { useEffect, useRef, useState } from "react"
import { KEY_STATS } from "@/config/constants"
import { StatItem } from "@/types"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ShieldCheck } from "lucide-react"

function SingleCounter({ stat }: { stat: StatItem }) {
  const [currentValue, setCurrentValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const duration = 1800 // ms
          const startTime = performance.now()
          const startVal = 0
          const endVal = stat.value

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeProgress = 1 - Math.pow(1 - progress, 3)
            const nextVal = startVal + (endVal - startVal) * easeProgress

            setCurrentValue(nextVal)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCurrentValue(endVal)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, stat.value])

  const formattedValue = stat.decimals
    ? currentValue.toFixed(stat.decimals)
    : Math.floor(currentValue).toString()

  return (
    <div
      ref={containerRef}
      className="relative rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="orange" className="text-xs uppercase font-bold py-1 px-3">
            {stat.detailBadge || "Verified"}
          </Badge>
          <TrendingUp className="h-5 w-5 text-orange-600" />
        </div>

        <div className="flex items-baseline font-black tracking-tight text-slate-900 my-2">
          {stat.prefix && (
            <span className="text-3xl sm:text-4xl text-orange-600 font-extrabold mr-1">
              {stat.prefix}
            </span>
          )}
          <span className="text-5xl sm:text-6xl tabular-nums">
            {formattedValue}
          </span>
          <span className="text-3xl sm:text-4xl text-orange-600 font-bold ml-1">
            {stat.suffix}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mt-2">
          {stat.label}
        </h3>

        <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
          {stat.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
        <ShieldCheck className="h-4 w-4 text-emerald-600" />
        <span>Verified Performance Data</span>
      </div>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section id="metrics" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/60 w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <Badge variant="orange" className="text-xs uppercase tracking-wider px-4 py-1.5">
            Verified Performance
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Indisputable Results Across{" "}
            <span className="text-orange-600">320+ Medical Practices</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            SLA-backed benchmarks that transform healthcare practice financial performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {KEY_STATS.map((stat) => (
            <SingleCounter key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
