"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { consultationFormSchema, ConsultationFormData, ApiResponse } from "@/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileSearch,
  Lock,
  PhoneCall,
  Clock,
} from "lucide-react"

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      practiceName: "",
      monthlyVolume: "$50k - $200k",
      ehrSystem: "",
      message: "",
      hipaaConsent: true,
    },
  })

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true)
    setServerError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const json: ApiResponse = await res.json()

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit consultation request")
      }

      setSubmitSuccess(true)
      reset()
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or call our direct provider hotline."
      setServerError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="audit-form" className="py-20 lg:py-28 bg-zinc-950 text-white relative overflow-hidden hero-grid-dark w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-950/50 px-4 py-1.5 text-xs sm:text-sm font-bold text-orange-400">
              <FileSearch className="h-4 w-4 text-orange-400" />
              100% Confidential Practice Diagnostic
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Claim Your Free 14-Point{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                RCM Audit
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Find out how much revenue your practice is leaving on the table. Our senior billing directors will analyze your denial trends, clearinghouse rejections, and aging accounts receivable—completely free with zero obligation.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Governed by Mutual HIPAA BAA Agreement</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Clock className="h-5 w-5 text-orange-400 shrink-0" />
                <span>Executive Findings Delivered Within 48 Hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Lock className="h-5 w-5 text-orange-400 shrink-0" />
                <span>Direct Consultation with Certified Billing Specialists</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <a
                href="tel:8884276664"
                className="inline-flex items-center gap-2.5 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-orange-400" />
                <span>Direct Provider Hotline: <strong className="text-white">(888) 427-6664</strong></span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
              {submitSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Audit Request Confirmed!
                  </h3>
                  <p className="text-base text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you. A Prima Claim Solutions Practice Director will contact you within 2 business hours to review your confidential assessment.
                  </p>
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      onClick={() => setSubmitSuccess(false)}
                      className="border-zinc-700 text-white bg-zinc-800 hover:bg-zinc-700 text-sm h-11 px-6"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                  <div className="border-b border-zinc-800 pb-3 mb-2 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Practice Assessment Form
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Confidential evaluation for US healthcare practices.
                      </p>
                    </div>
                    <Badge variant="dark" className="text-xs text-emerald-400 border-emerald-900 py-1 px-3">
                      SSL 256-Bit Encrypted
                    </Badge>
                  </div>

                  {serverError && (
                    <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-800/80 text-sm text-red-300 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Practice Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Full Name / Title *
                      </label>
                      <Input
                        placeholder="Dr. Michael Reynolds, MD"
                        {...register("fullName")}
                        hasError={!!errors.fullName}
                        className="h-11 bg-zinc-950/80 border-zinc-700 text-white placeholder:text-zinc-500 text-sm"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400 mt-1">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Practice Name *
                      </label>
                      <Input
                        placeholder="Apex Cardiology Specialists"
                        {...register("practiceName")}
                        hasError={!!errors.practiceName}
                        className="h-11 bg-zinc-950/80 border-zinc-700 text-white placeholder:text-zinc-500 text-sm"
                      />
                      {errors.practiceName && (
                        <p className="text-xs text-red-400 mt-1">
                          {errors.practiceName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Provider Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Provider / Work Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="m.reynolds@apexcardio.com"
                        {...register("email")}
                        hasError={!!errors.email}
                        className="h-11 bg-zinc-950/80 border-zinc-700 text-white placeholder:text-zinc-500 text-sm"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Direct Phone Number *
                      </label>
                      <Input
                        placeholder="(555) 234-5678"
                        {...register("phone")}
                        hasError={!!errors.phone}
                        className="h-11 bg-zinc-950/80 border-zinc-700 text-white placeholder:text-zinc-500 text-sm"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Monthly Volume & EHR Software */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Avg Monthly Billing Volume *
                      </label>
                      <select
                        {...register("monthlyVolume")}
                        className="flex h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-3.5 py-2 text-sm text-white transition-colors focus-visible:outline-none focus-visible:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500/20"
                      >
                        <option value="$0 - $50k">$0 - $50k / month</option>
                        <option value="$50k - $200k">$50k - $200k / month</option>
                        <option value="$200k - $500k">$200k - $500k / month</option>
                        <option value="$500k+">$500k+ / month</option>
                      </select>
                      {errors.monthlyVolume && (
                        <p className="text-xs text-red-400 mt-1">
                          {errors.monthlyVolume.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Current EHR / PMS (Optional)
                      </label>
                      <Input
                        placeholder="e.g. Epic, AthenaHealth, Kareo, eCW"
                        {...register("ehrSystem")}
                        className="h-11 bg-zinc-950/80 border-zinc-700 text-white placeholder:text-zinc-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Billing Concerns or Focus Areas (Optional)
                    </label>
                    <Textarea
                      placeholder="e.g., Prior auth denials, aging A/R past 90 days, recent staff turnover..."
                      {...register("message")}
                      rows={2}
                      className="bg-zinc-950/80 border-zinc-700 text-white placeholder:text-zinc-500 text-sm p-3"
                    />
                  </div>

                  {/* HIPAA Consent */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        {...register("hipaaConsent")}
                        className="mt-0.5 h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-xs text-zinc-400 leading-normal">
                        I acknowledge that information provided will be treated confidentially pursuant to federal HIPAA privacy standards. A BAA will precede any sample data sharing.
                      </span>
                    </label>
                    {errors.hipaaConsent && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.hipaaConsent.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full text-base font-bold shadow-lg shadow-orange-600/30 h-13"
                    >
                      <span>Claim Free Practice Audit & Diagnostic</span>
                    </Button>
                    <p className="text-xs text-center text-zinc-500 mt-2">
                      Zero setup fee • No software change required • 100% HIPAA compliant
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
