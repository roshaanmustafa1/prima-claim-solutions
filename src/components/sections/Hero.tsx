"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Award,
  Phone,
  CheckCircle2,
  Clock,
  Star,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SlideData {
  id: string
  doctorName: string
  role: string
  organization: string
  specialty: string
  headline: string
  subtext: string
  image: string
  metrics: {
    primary: { value: string; label: string }
    secondary: { value: string; label: string }
    tertiary: { value: string; label: string }
  }
}

const HERO_SLIDES: SlideData[] = [
  {
    id: "slide-1",
    doctorName: "Dr. James Lee, MD",
    role: "Managing Partner & Cardiologist",
    organization: "Apex Cardiology Network",
    specialty: "Cardiology & Interventional Care",
    headline: "Our Days in A/R Dropped from 52 to 24 Days in Just 90 Days.",
    subtext:
      "Prima Claim Solutions overhauled our charge capture and insurance follow-ups. We recovered $410,000 in uncollected clinical care without replacing our existing software.",
    image: "/images/happy-doctor-director.jpg",
    metrics: {
      primary: { value: "+34%", label: "Net Collections" },
      secondary: { value: "99.4%", label: "Clean Claims" },
      tertiary: { value: "24 Days", label: "Days in A/R" },
    },
  },
  {
    id: "slide-2",
    doctorName: "Dr. Sarah Jenkins, MD",
    role: "Clinical Director",
    organization: "Mid-Atlantic Surgical Institute",
    specialty: "Surgery Centers & Ambulatory Care",
    headline: "Prior Auth Delays Cut by 70%. Zero Administrative Disruption.",
    subtext:
      "Our surgeons and nursing staff spend zero time on hold with insurance companies. Prima Claim Solutions' AAPC certified team handles the entire approval pipeline.",
    image: "/images/doctor-chart-review.jpg",
    metrics: {
      primary: { value: "70%", label: "Faster Auths" },
      secondary: { value: "99.2%", label: "First-Pass Rate" },
      tertiary: { value: "14 Days", label: "Fast Onboarding" },
    },
  },
  {
    id: "slide-3",
    doctorName: "Michael Vance, MHA & Team",
    role: "Chief Operating Officer",
    organization: "Summit Health Specialists",
    specialty: "Multi-Specialty Healthcare Network",
    headline: "Native EHR Integration with Zero Platform Transition.",
    subtext:
      "They connected directly into our Epic instance via secure VPN tunnels. Our aging insurance accounts were liquidated and resolved in under 60 days.",
    image: "/images/hospital-rcm-team.jpg",
    metrics: {
      primary: { value: "$450M+", label: "Annual Volume" },
      secondary: { value: "84.6%", label: "Appeals Won" },
      tertiary: { value: "100%", label: "HIPAA BAA" },
    },
  },
  {
    id: "slide-4",
    doctorName: "Elena Rostova & Staff",
    role: "Practice Executive",
    organization: "Wellspring Family Health",
    specialty: "Primary Care & Urgent Care Centers",
    headline: "Real-Time Patient Insurance Verification at Check-In.",
    subtext:
      "Verifying patient eligibility and copays in real-time eradicated downstream rejections across all 4 of our clinical locations.",
    image: "/images/patient-insurance-desk.jpg",
    metrics: {
      primary: { value: "99.8%", label: "Eligibility Accuracy" },
      secondary: { value: "<28 Days", label: "A/R Turnaround" },
      tertiary: { value: "24/7", label: "Dedicated Director" },
    },
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  const slide = HERO_SLIDES[currentSlide]

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50/80 to-white pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Top Trust Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/70 pb-5 mb-8">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-orange-600" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
              Enterprise Medical Billing & Revenue Cycle Management (RCM)
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-1.5 text-slate-800">
              <ShieldCheck className="h-4 w-4 text-orange-600" />
              100% HIPAA & HITECH Certified
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-800">
              <Award className="h-4 w-4 text-orange-600" />
              AAPC & AHIMA Certified Coders
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-800">
              <TrendingUp className="h-4 w-4 text-emerald-600" />
              99.2% Clean Claims Rate
            </span>
          </div>
        </div>

        {/* Main Slider Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Client Story & Dynamic Headline */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <Badge variant="orange" className="text-xs font-bold py-1 px-3">
                {slide.specialty}
              </Badge>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.12] transition-all duration-300 min-h-[120px] sm:min-h-[140px] flex items-center">
              &ldquo;{slide.headline}&rdquo;
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl min-h-[60px]">
              {slide.subtext}
            </p>

            {/* Doctor Attribution */}
            <div className="flex items-center gap-4 pt-1">
              <div className="relative h-14 w-14 rounded-2xl overflow-hidden border-2 border-orange-500 shadow-sm shrink-0">
                <Image
                  src={slide.image}
                  alt={slide.doctorName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>{slide.doctorName}</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {slide.role} • {slide.organization}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a href="#audit-form" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base font-bold shadow-lg shadow-orange-500/25 px-8 h-14"
                >
                  <span>Claim Free 14-Point RCM Audit</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

              <a href="tel:8884276664" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base font-semibold border-slate-300 hover:bg-slate-50 text-slate-800 px-7 h-14"
                >
                  <Phone className="mr-2 h-4 w-4 text-orange-600" />
                  <span>Call (888) 427-6664</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Photography + Live Metrics Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white group">
              <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full">
                <Image
                  src={slide.image}
                  alt={`${slide.doctorName} - ${slide.organization}`}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/25 to-transparent" />

                {/* Floating Metric Overlay on Image */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-xl">
                  <div className="text-center border-r border-slate-200 pr-2">
                    <div className="text-xl sm:text-3xl font-black text-orange-600">
                      {slide.metrics.primary.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wider mt-0.5">
                      {slide.metrics.primary.label}
                    </div>
                  </div>

                  <div className="text-center border-r border-slate-200 px-2">
                    <div className="text-xl sm:text-3xl font-black text-slate-900">
                      {slide.metrics.secondary.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wider mt-0.5">
                      {slide.metrics.secondary.label}
                    </div>
                  </div>

                  <div className="text-center pl-2">
                    <div className="text-xl sm:text-3xl font-black text-emerald-600">
                      {slide.metrics.tertiary.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wider mt-0.5">
                      {slide.metrics.tertiary.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prev / Next Slider Arrows */}
            <div className="absolute -bottom-5 right-6 flex items-center gap-2 z-20">
              <button
                onClick={prevSlide}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-700 shadow-md hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md hover:bg-orange-500 transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Slide Selector Tabs & Progress Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200/70">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {HERO_SLIDES.map((s, idx) => {
              const isActive = idx === currentSlide
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={cn(
                    "text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden",
                    isActive
                      ? "bg-white border-orange-500 shadow-md ring-1 ring-orange-500/30"
                      : "bg-slate-50/70 border-slate-200/70 hover:bg-white hover:border-slate-300"
                  )}
                >
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Client Case 0{idx + 1}</span>
                    {isActive && (
                      <span className="text-[11px] font-extrabold text-orange-600">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-bold text-slate-900 truncate">
                    {s.doctorName}
                  </div>
                  <div className="text-xs text-slate-500 truncate mt-0.5">
                    {s.organization}
                  </div>

                  {/* Active Slide Progress Line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
