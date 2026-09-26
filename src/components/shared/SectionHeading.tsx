import React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  badge?: string
  badgeVariant?: "orange" | "dark" | "outline" | "red" | "default"
  title: React.ReactNode
  subtitle?: string
  align?: "center" | "left"
  theme?: "light" | "dark"
  className?: string
}

export function SectionHeading({
  badge,
  badgeVariant = "orange",
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark"

  return (
    <div
      className={cn(
        "flex flex-col space-y-4 max-w-3xl",
        align === "center" ? "mx-auto text-center items-center" : "text-left items-start",
        className
      )}
    >
      {badge && (
        <Badge
          variant={badgeVariant}
          className="text-xs uppercase tracking-wider px-3.5 py-1"
        >
          {badge}
        </Badge>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-zinc-950"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-2xl",
            isDark ? "text-zinc-400" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
