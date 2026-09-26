import React from "react"
import Image from "next/image"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TRUST_PILLARS, EHR_INTEGRATIONS } from "@/config/constants"
import {
  ShieldCheck,
  Award,
  Layers,
  Users,
  CheckCircle2,
  Lock,
  ArrowRight,
  Database,
} from "lucide-react"

export function WhyChooseUs() {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case "Lock":
        return <Lock className="h-6 w-6 text-orange-400" />
      case "Award":
        return <Award className="h-6 w-6 text-orange-400" />
      case "Layers":
        return <Layers className="h-6 w-6 text-orange-400" />
      case "Users":
        return <Users className="h-6 w-6 text-orange-400" />
      default:
        return <ShieldCheck className="h-6 w-6 text-orange-400" />
    }
  }

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-zinc-950 text-white relative overflow-hidden hero-grid-dark w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <SectionHeading
          theme="dark"
          badge="Security & Compliance"
          badgeVariant="dark"
          title={
            <>
              Enterprise Security &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Clinical Precision
              </span>
            </>
          }
          subtitle="Medical billing demands military-grade data protection, zero-trust infrastructure, and AAPC/AHIMA certified coding compliance."
        />

        {/* 4 Trust Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-panel-dark rounded-3xl p-7 border border-zinc-800/90 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-700/80">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <Badge variant="dark" className="text-xs border-zinc-700 text-orange-300 py-1 px-2.5">
                    {pillar.badge}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {pillar.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-800/70 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Enterprise Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* EHR Compatibility & Patient Verification */}
        <div className="mt-16 rounded-3xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/95 to-zinc-950/95 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Photo: Patient Insurance Check-in */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-zinc-800 shadow-xl group">
              <div className="relative h-72 sm:h-80 w-full">
                <Image
                  src="/images/patient-insurance-desk.jpg"
                  alt="Medical practice receptionist checking patient insurance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-0.5">
                    Front-Desk to Clearinghouse
                  </div>
                  <div className="text-lg font-bold">
                    Real-Time Insurance Eligibility Verification
                  </div>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    Eradicating downstream rejections before the clinical encounter takes place.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: EHR Compatibility */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                <Database className="h-4 w-4" />
                Zero Platform Switch
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                We Connect Directly Into Your Existing EHR Software
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Never lose your clinical charts, patient records, or established scheduling workflows. Our certified team works natively inside your EHR/PMS via encrypted VPN or authorized API.
              </p>

              {/* Supported EHR Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                {EHR_INTEGRATIONS.slice(0, 6).map((ehr, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3 hover:border-orange-500/40 transition-all text-center"
                  >
                    <span className="text-sm font-bold text-white block">
                      {ehr.name}
                    </span>
                    <span className="text-xs text-emerald-400 font-medium block mt-0.5">
                      {ehr.compatibility}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a href="#audit-form">
                  <Button variant="default" className="font-bold text-sm h-12 px-7">
                    Verify Your EHR Compatibility
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
