"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Brand } from "@/components/shared/Brand"
import { navItems } from "@/config/site"
import { useScrollPosition } from "@/hooks/useScrollPosition"

export function Navbar() {
  const { isScrolled } = useScrollPosition(16, 4)
  const pathname = usePathname()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const isOpen = openPath === pathname
  const closeMenu = () => setOpenPath(null)

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-40 ${isScrolled ? `site-header-floating ${isOpen ? "site-header-expanded" : ""}` : isOpen ? "bg-white shadow-[0_4px_24px_-16px_#193c4330]" : "bg-transparent"}`}>
      <div className="site-container flex h-[var(--header-height)] items-center justify-between gap-4">
        <div onClick={closeMenu}><Brand /></div>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href} aria-current={isActive ? "page" : undefined} className={`rounded-full px-3 py-2.5 text-[13px] font-semibold transition-colors xl:px-4 ${isActive ? "bg-[#e9eee6] text-[#193c43]" : "text-slate-600 hover:bg-[#f0f2ec] hover:text-[#193c43]"}`}>
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-3 ">
          <Link href="/contact" onClick={closeMenu} className="site-button hidden rounded-full sm:inline-flex">Let’s talk <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <button type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"} onClick={() => setOpenPath(isOpen ? null : pathname)} onKeyDown={(event) => { if (event.key === "Escape") closeMenu() }} className="rounded-full border border-[#dce2d7] p-2.5 text-[#193c43] hover:bg-[#f0f2ec] lg:hidden">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isOpen} onKeyDown={(event) => { if (event.key === "Escape") closeMenu() }} className={isOpen ? "site-container flex max-h-[calc(100svh-var(--header-height))] flex-col gap-1 overflow-y-auto border-t border-[#e1e5de] py-4 lg:hidden" : "hidden"}>
        {navItems.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu} aria-current={pathname === item.href ? "page" : undefined} className={`rounded-lg px-3 py-3 text-base font-medium ${pathname === item.href ? "bg-[#e9eee6]" : "hover:bg-[#f0f2ec]"}`}>{item.label}</Link>)}
        <Link href="/contact" onClick={closeMenu} className="site-button mt-3 rounded-full">Talk about your practice <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </nav>
    </header>
  )
}
