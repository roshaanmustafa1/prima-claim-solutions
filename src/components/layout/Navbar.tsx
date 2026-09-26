"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { navItems, siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/layout/MobileMenu"
import { Phone, Shield, Menu, ArrowRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { isScrolled } = useScrollPosition(15)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Micro-Bar for Compliance & Contact - Full Width */}
      <div className="hidden lg:block bg-zinc-950 text-zinc-300 text-xs py-2 px-6 sm:px-10 lg:px-16 xl:px-20 border-b border-zinc-800/80">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Shield className="h-3.5 w-3.5" />
              100% HIPAA & HITECH Certified BAA
            </span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-400">AAPC & AHIMA Certified Coders</span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-400">SOC 2 Type II Audited Facilities</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteConfig.links.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-orange-500" />
              <span>Provider Hotline: <strong className="text-white">{siteConfig.links.phone}</strong></span>
            </a>
            <span className="text-zinc-700">|</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Payer Clearinghouses Online
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header - Full Width */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4.5"
        )}
      >
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
          {/* Brand Logo with Modern SVG Medical Cross/Pulse */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform duration-200">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 3v18" strokeOpacity="0.4" />
                <path d="M3 12h18" strokeOpacity="0.4" />
                <path
                  d="M4 12h3l2-4 3 8 2-6 2 3h4"
                  stroke="white"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950">
                  Prima Claim
                </span>
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-orange-600">
                  Solutions
                </span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 -mt-1">
                Enterprise Healthcare RCM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.links.phone.replace(/[^0-9]/g, "")}`}
              className="text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors hidden xl:inline-flex items-center gap-1.5"
            >
              <Phone className="h-4 w-4 text-orange-600" />
              <span>{siteConfig.links.phone}</span>
            </a>

            <a href="#audit-form">
              <Button
                variant="default"
                size="default"
                className="font-bold shadow-md hover:shadow-orange-500/25 px-5 h-11"
              >
                <span>Free RCM Audit</span>
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2.5">
            <a href="#audit-form">
              <Button size="sm" variant="default" className="text-xs px-3">
                Audit
              </Button>
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-Out Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
