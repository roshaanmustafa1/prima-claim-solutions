import React from "react"
import { cn } from "@/lib/utils"

interface FloatingBadgeProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  trend?: string
  trendPositive?: boolean
  className?: string
}

export function FloatingBadge({
  icon,
  title,
  subtitle,
  trend,
  trendPositive = true,
  className,
}: FloatingBadgeProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 border border-slate-200/90 transition-all duration-300 hover:shadow-xl hover:scale-105",
        className
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 border border-orange-100 shadow-xs">
        {icon}
      </div>

      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-900 leading-tight">
            {title}
          </span>
          {trend && (
            <span
              className={cn(
                "text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
                trendPositive
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              )}
            >
              {trend}
            </span>
          )}
        </div>
        <span className="text-xs text-slate-500 truncate leading-tight mt-0.5">
          {subtitle}
        </span>
      </div>
    </div>
  )
}
