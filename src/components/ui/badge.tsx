import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-primary text-primary-foreground shadow-xs",
        secondary:
          "border border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200",
        outline:
          "border border-slate-300 text-slate-800 bg-white/70 backdrop-blur-xs",
        orange:
          "border border-orange-200 bg-orange-50 text-orange-800 font-medium",
        red:
          "border border-red-200 bg-red-50 text-red-700 font-medium",
        success:
          "border border-emerald-200 bg-emerald-50 text-emerald-700 font-medium",
        dark:
          "border border-zinc-700 bg-zinc-900 text-zinc-100 font-medium shadow-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
