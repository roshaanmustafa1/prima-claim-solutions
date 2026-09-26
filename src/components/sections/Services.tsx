import React from "react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { SERVICES_DATA } from "@/config/constants"
import {
  ReceiptText,
  ShieldCheck,
  Cpu,
  AlertTriangle,
  FileCode2,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react"

export function Services() {
  const getIcon = (name: string) => {
    switch (name) {
      case "ReceiptCheck":
        return <ReceiptText className="h-6 w-6 text-orange-600" />
      case "ShieldCheck":
        return <ShieldCheck className="h-6 w-6 text-orange-600" />
      case "Cpu":
        return <Cpu className="h-6 w-6 text-orange-600" />
      case "AlertTriangle":
        return <AlertTriangle className="h-6 w-6 text-orange-600" />
      case "FileSpreadsheet":
        return <FileCode2 className="h-6 w-6 text-orange-600" />
      case "ClockHistory":
        return <Clock className="h-6 w-6 text-orange-600" />
      default:
        return <ReceiptText className="h-6 w-6 text-orange-600" />
    }
  }

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-200/60 w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <SectionHeading
          badge="End-to-End RCM Services"
          badgeVariant="orange"
          title={
            <>
              Enterprise Medical Billing Solutions Engineered for{" "}
              <span className="text-orange-600">Zero Revenue Loss</span>
            </>
          }
          subtitle="Managed by certified AAPC/AHIMA billing directors and automated rules engines to accelerate practice cash flow."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <Card
              key={service.id}
              className="group relative flex flex-col justify-between border-slate-200/90 bg-slate-50/40 hover:bg-white hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 rounded-3xl p-2"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-full" />

              <CardHeader className="p-6 sm:p-7 pb-3">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100/70 border border-orange-200/60 group-hover:bg-orange-600 transition-all duration-300 [&_svg]:group-hover:text-white">
                    {getIcon(service.iconName)}
                  </div>

                  <Badge variant="orange" className="text-xs font-semibold px-3 py-1">
                    {service.category}
                  </Badge>
                </div>

                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </CardTitle>

                <p className="text-sm text-slate-600 leading-relaxed mt-2.5">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="p-6 sm:p-7 pt-0 flex flex-col justify-between flex-1">
                {/* 2 Clean Benefits */}
                <div className="space-y-2 py-4 border-t border-slate-200/70">
                  {service.features.slice(0, 2).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Card Bottom: Metric & CTA */}
                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Target SLA
                    </span>
                    <span className="text-base font-extrabold text-slate-900">
                      {service.statsHighlight}
                    </span>
                  </div>

                  <a
                    href="#audit-form"
                    className="inline-flex items-center text-sm font-bold text-orange-600 hover:text-orange-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>{service.ctaText || "Explore"}</span>
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
