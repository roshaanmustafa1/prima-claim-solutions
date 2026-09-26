"use client"

import React, { useState } from "react"
import {
  TrendingUp,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Activity,
  FileCheck2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function AnalyticsCard() {
  const [activeTab, setActiveTab] = useState<"overview" | "velocity" | "denials">("overview")

  return (
    <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-2xl transition-all duration-300">
      {/* SaaS Dashboard Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600 text-white font-bold text-base shadow-sm">
            OM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-slate-900">
                Pinnacle Health Network
              </span>
              <span className="inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
              <span>Multi-Specialty Clinic</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">Live Payer Gateway</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center rounded-xl bg-slate-100 p-1 text-xs font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab("overview")}
            className={cn(
              "rounded-lg px-3.5 py-1.5 transition-all cursor-pointer",
              activeTab === "overview"
                ? "bg-white text-slate-900 shadow-sm font-bold"
                : "hover:text-slate-900"
            )}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("velocity")}
            className={cn(
              "rounded-lg px-3.5 py-1.5 transition-all cursor-pointer",
              activeTab === "velocity"
                ? "bg-white text-slate-900 shadow-sm font-bold"
                : "hover:text-slate-900"
            )}
          >
            Claims Velocity
          </button>
          <button
            onClick={() => setActiveTab("denials")}
            className={cn(
              "rounded-lg px-3.5 py-1.5 transition-all cursor-pointer",
              activeTab === "denials"
                ? "bg-white text-slate-900 shadow-sm font-bold"
                : "hover:text-slate-900"
            )}
          >
            Denial Defense
          </button>
        </div>
      </div>

      {/* Dynamic Tab Content */}
      {activeTab === "overview" && (
        <div className="mt-6 space-y-6">
          {/* 3 Metric Cards */}
          <div className="grid grid-cols-3 gap-3.5">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
              <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1.5">
                <span>Clean Claims</span>
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-black text-slate-900">99.2%</div>
              <div className="flex items-center text-xs text-emerald-600 font-semibold mt-1">
                <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" />
                <span>+14.2%</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
              <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1.5">
                <span>Days in A/R</span>
                <Clock className="h-4 w-4 text-orange-600" />
              </div>
              <div className="text-2xl font-black text-slate-900">27.4 d</div>
              <div className="flex items-center text-xs text-emerald-600 font-semibold mt-1">
                <span>-26 days</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
              <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1.5">
                <span>Net Collections</span>
                <TrendingUp className="h-4 w-4 text-orange-600" />
              </div>
              <div className="text-2xl font-black text-slate-900">$1.48M</div>
              <div className="flex items-center text-xs text-emerald-600 font-semibold mt-1">
                <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" />
                <span>+32.4%</span>
              </div>
            </div>
          </div>

          {/* Clean Visual Volume Chart */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Activity className="h-4 w-4 text-orange-600" />
                Daily Claim Transmission & Settlement
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                  Submitted
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  Settled & Paid
                </span>
              </div>
            </div>

            <div className="h-28 flex items-end gap-3 pt-3 px-1">
              {[
                { day: "Mon", h1: "65%", h2: "85%" },
                { day: "Tue", h1: "78%", h2: "92%" },
                { day: "Wed", h1: "88%", h2: "96%" },
                { day: "Thu", h1: "75%", h2: "90%" },
                { day: "Fri", h1: "92%", h2: "98%" },
                { day: "Sat", h1: "40%", h2: "68%" },
                { day: "Sun", h1: "30%", h2: "58%" },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full flex items-end justify-center gap-1.5 h-20">
                    <div
                      style={{ height: bar.h1 }}
                      className="w-3 rounded-t-md bg-orange-500 transition-all hover:bg-orange-600"
                    />
                    <div
                      style={{ height: bar.h2 }}
                      className="w-3 rounded-t-md bg-emerald-500 transition-all hover:bg-emerald-600"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-400">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Claims Feed */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Recent Adjudicated Claims
            </div>
            <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50/60 text-sm">
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-3">
                  <FileCheck2 className="h-5 w-5 text-emerald-600" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Blue Cross Shield • Cardiology</span>
                    <span className="text-xs text-slate-500">Claim #849120 • 99214 Consultation</span>
                  </div>
                </div>
                <Badge variant="success" className="text-xs py-1 px-3">
                  Paid $420.50
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-orange-600" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Aetna Choice • Orthopedics</span>
                    <span className="text-xs text-slate-500">Prior Auth Approved in 4h</span>
                  </div>
                </div>
                <Badge variant="orange" className="text-xs py-1 px-3">
                  Cleared
                </Badge>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "velocity" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-2xl bg-orange-50/70 p-4 border border-orange-100 text-sm">
            <div className="font-bold text-orange-950 mb-1 flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-600" />
              Turnaround Acceleration
            </div>
            <p className="text-orange-900 leading-relaxed text-xs sm:text-sm">
              Average timeline from clinical charge creation to cash bank posting compressed from 48.6 days down to 14.2 days.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            {[
              { stage: "Patient Eligibility Pre-Check", time: "Instant (Real-Time)", status: "Active" },
              { stage: "Encounter Review & Coding", time: "Under 18 Hours", status: "AAPC Certified" },
              { stage: "Rules Engine Scrubbing", time: "Under 2 Seconds", status: "Zero Errors" },
              { stage: "Payer Electronic Transmission", time: "Same Day", status: "EDI 837" },
              { stage: "Remittance Reconciliation", time: "Under 12 Hours", status: "ERA 835" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                    {idx + 1}
                  </span>
                  <span className="font-semibold text-slate-800">{step.stage}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-slate-600 font-semibold text-xs">{step.time}</span>
                  <Badge variant="outline" className="text-xs">
                    {step.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "denials" && (
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-red-100 bg-red-50/60 p-4">
              <span className="text-xs text-red-600 font-semibold block">Initial Denial Rate</span>
              <span className="text-3xl font-black text-red-700 mt-1 block">0.8%</span>
              <span className="text-xs text-red-600 block mt-1">National average is 15-20%</span>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
              <span className="text-xs text-emerald-700 font-semibold block">Appeals Win Rate</span>
              <span className="text-3xl font-black text-emerald-800 mt-1 block">84.6%</span>
              <span className="text-xs text-emerald-700 block mt-1">$480k recovered this quarter</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm">
            <div className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-orange-600" />
              Proactive Prevention Engine
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span>Medical Necessity Documentation:</span>
                <span className="font-bold text-emerald-700">Auto-Matched</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span>Prior Authorization Status:</span>
                <span className="font-bold text-emerald-700">Verified Pre-Visit</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>CCI Modifier Appropriateness:</span>
                <span className="font-bold text-emerald-700">Triple-Scrubbed</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
