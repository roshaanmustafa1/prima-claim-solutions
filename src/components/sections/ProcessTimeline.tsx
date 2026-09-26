import React from "react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { PROCESS_STEPS } from "@/config/constants"
import {
  UserCheck,
  ClipboardCheck,
  FileCode,
  Send,
  Coins,
  RefreshCcw,
  Clock,
  CheckCircle2,
} from "lucide-react"

export function ProcessTimeline() {
  const getStepIcon = (name: string) => {
    switch (name) {
      case "UserCheck":
        return <UserCheck className="h-5 w-5 text-orange-600" />
      case "ClipboardCheck":
        return <ClipboardCheck className="h-5 w-5 text-orange-600" />
      case "FileCode":
        return <FileCode className="h-5 w-5 text-orange-600" />
      case "Send":
        return <Send className="h-5 w-5 text-orange-600" />
      case "Coins":
        return <Coins className="h-5 w-5 text-orange-600" />
      case "RefreshCcw":
        return <RefreshCcw className="h-5 w-5 text-orange-600" />
      default:
        return <UserCheck className="h-5 w-5 text-orange-600" />
    }
  }

  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-b border-slate-200/60 w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <SectionHeading
          badge="High-Velocity RCM Lifecycle"
          badgeVariant="orange"
          title={
            <>
              Precision 6-Stage Workflow from{" "}
              <span className="text-orange-600">Intake to Remittance</span>
            </>
          }
          subtitle="Our audited revenue cycle pipeline moves claims rapidly—converting clinical care into deposited cash."
        />

        {/* 6-Stage Steps */}
        <div className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="group rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-600 text-white font-black text-base shadow-md shadow-orange-600/20 group-hover:scale-110 transition-transform">
                      {step.stepNumber}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 border border-orange-100">
                      {getStepIcon(step.iconName)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-orange-700 mt-1 mb-2.5">
                    {step.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-orange-500" />
                    Turnaround:
                  </span>
                  <span className="font-bold text-slate-900 font-mono">
                    {step.turnaround}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-orange-600 to-amber-600 p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-2xl font-black">
              Ready to accelerate your claim lifecycle?
            </h4>
            <p className="text-sm sm:text-base text-orange-100 max-w-xl">
              Our specialists will review your current clearinghouse rejection report and uncover immediate recoveries.
            </p>
          </div>

          <a href="#audit-form" className="shrink-0">
            <div className="rounded-xl bg-white px-7 py-3.5 text-sm sm:text-base font-extrabold text-orange-700 hover:bg-orange-50 shadow-md transition-all cursor-pointer">
              Request Workflow Audit →
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
