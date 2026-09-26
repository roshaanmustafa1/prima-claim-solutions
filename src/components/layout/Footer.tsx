import React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { ShieldCheck, Lock, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800 pt-16 pb-12">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-zinc-800/80">
          {/* Column 1: Company Profile & HIPAA */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-amber-600 text-white shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 3v18" strokeOpacity="0.4" />
                  <path d="M3 12h18" strokeOpacity="0.4" />
                  <path d="M4 12h3l2-4 3 8 2-6 2 3h4" stroke="white" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white">
                  Prima Claim <span className="text-orange-500">Solutions</span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 -mt-1">
                  Enterprise Healthcare RCM
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Prima Claim Solutions is an enterprise revenue cycle management partner helping independent practices, clinics, and surgical centers nationwide maximize revenue and eliminate denial overhead.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 px-3.5 py-2 text-xs text-emerald-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% HIPAA & HITECH Certified • BAA Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Column 2: Clinical Specialties */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Specialties Served
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              {[
                "Cardiology & Interventional Care",
                "Orthopedics & Spine Surgery",
                "Ambulatory Surgery Centers (ASC)",
                "Family Practice & Internal Medicine",
                "Neurology & Pain Management",
                "Pediatrics & Multi-Specialty Clinics",
              ].map((specialty, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                  <span>{specialty}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Security */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Compliance & Security
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-orange-400 shrink-0" />
                <span>AES-256 Bit Encryption at Rest & in Transit</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                <span>Annual SOC 2 Type II Security Audits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                <span>100% AAPC & AHIMA Certified Coders</span>
              </li>
              <li className="pt-2">
                <a href="#audit-form" className="text-sm text-orange-400 hover:text-orange-300 font-semibold underline">
                  Request Security Whitepaper & BAA →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Provider Inquiries
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <a
                href={`tel:${siteConfig.links.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-2.5 text-zinc-200 hover:text-orange-400 transition-colors font-medium"
              >
                <Phone className="h-4 w-4 text-orange-500 shrink-0" />
                <span>{siteConfig.links.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.links.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-orange-500 shrink-0" />
                <span>{siteConfig.links.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{siteConfig.links.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-500">
          <div>
            © {new Date().getFullYear()} Prima Claim Solutions, LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>All Payer Gateways Operational (100% Uptime)</span>
          </div>

          <div className="flex items-center gap-5 text-zinc-400">
            <a href="#audit-form" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#audit-form" className="hover:text-white transition-colors">HIPAA Statement</a>
            <span>•</span>
            <a href="#audit-form" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
