"use client"

import React, { useEffect } from "react"
import { navItems, siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { X, Phone, ShieldCheck, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-zinc-950/60 backdrop-blur-xs transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between p-6 border-l border-slate-200",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white font-bold text-xs">
                PCS
              </div>
              <span className="font-extrabold text-base text-zinc-950">
                Prima Claim <span className="text-orange-600">Solutions</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>
            ))}
          </nav>

          {/* CTA Box */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200/70">
            <h4 className="font-bold text-sm text-zinc-900 mb-1">
              Complimentary RCM Diagnostic
            </h4>
            <p className="text-xs text-slate-600 mb-3">
              Uncover up to 30% in unbilled clinical charges & aging A/R.
            </p>
            <a href="#audit-form" onClick={onClose} className="block w-full">
              <Button className="w-full font-bold text-xs" size="sm">
                Claim Free Practice Audit
              </Button>
            </a>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="border-t border-slate-100 pt-4 space-y-3">
          <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>100% HIPAA & HITECH BAA Guaranteed</span>
          </div>

          <a
            href={`tel:${siteConfig.links.phone.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-orange-600"
          >
            <Phone className="h-4 w-4 text-orange-600 shrink-0" />
            <span>Provider Direct: {siteConfig.links.phone}</span>
          </a>
        </div>
      </div>
    </>
  )
}
