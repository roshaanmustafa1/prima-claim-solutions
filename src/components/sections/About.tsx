import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, HeartHandshake, ArrowRight, Zap, Users } from "lucide-react"

export function About() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/60 w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs sm:text-sm font-bold text-orange-900">
              <HeartHandshake className="h-4 w-4 text-orange-600" />
              Physician-First Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.18]">
              We Reclaim Your Revenue So You Can Focus on Patient Care
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Medical practices across the country lose between <strong className="text-zinc-900 font-semibold">8% to 15% of their earned clinical revenue</strong> every year to aggressive insurer claim stalls and administrative turnover.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Prima Claim Solutions operates as a dedicated extension of your practice—combining dual-certified AAPC/AHIMA billing directors with modern automation to capture and collect every dollar you earned.
            </p>

            {/* 3 Core Commitments */}
            <div className="space-y-3.5 pt-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Performance-Aligned Partnership
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mt-0.5">
                    Zero onboarding fees or rigid software contracts. We only earn a small percentage of the funds we successfully collect and deposit.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    14-Day Zero-Downtime Transition
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mt-0.5">
                    Our structured transition blueprint allows your clinical and front-desk staff to continue operations with zero clearinghouse pause.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Dedicated US Account Director
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mt-0.5">
                    Direct phone line to an experienced senior billing manager who knows your clinicians, specialty, and payer contracts.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a href="#audit-form">
                <Button size="lg" className="font-bold text-base h-13 px-8">
                  Schedule Practice Evaluation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Visual: Hospital Leadership Team Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white group">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src="/images/hospital-rcm-team.jpg"
                  alt="Medical directors and hospital billing specialists reviewing revenue cycle analytics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-xl text-slate-900">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
                    Enterprise Healthcare Advisory
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-slate-900 block mt-0.5">
                    Senior Medical Billing Directors Working for You
                  </span>
                  <span className="text-xs text-slate-500 mt-1 block">
                    Supporting 320+ private practices, ASCs, and multi-specialty clinics nationwide.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
