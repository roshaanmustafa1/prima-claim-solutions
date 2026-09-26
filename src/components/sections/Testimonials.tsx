import React from "react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { TESTIMONIALS } from "@/config/constants"
import { Star, Quote, CheckCircle2 } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-b border-slate-200/60 w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <SectionHeading
          badge="Verified Client Testimonials"
          badgeVariant="orange"
          title={
            <>
              Trusted by Leading Physicians &{" "}
              <span className="text-orange-600">Practice Directors</span>
            </>
          }
          subtitle="Discover how clinics and healthcare networks replaced denial frustration with accelerated cash flow."
        />

        {/* Testimonials Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-slate-200/90 bg-slate-50/40 p-8 shadow-xs hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Badge variant="orange" className="text-xs font-bold px-3 py-1">
                    {t.specialty}
                  </Badge>
                </div>

                <Quote className="h-8 w-8 text-orange-200 mb-3" />

                <p className="text-base text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-slate-200/80">
                <div className="rounded-xl bg-orange-50/80 border border-orange-100 p-2.5 mb-3.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-700 block">
                    Verified Metric
                  </span>
                  <span className="text-sm font-extrabold text-orange-950 mt-0.5 block">
                    {t.metricAchieved}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-800 font-bold text-sm">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{t.author}</span>
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div className="text-xs text-slate-500">
                      {t.role}, {t.organization}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
