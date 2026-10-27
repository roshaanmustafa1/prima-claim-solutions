import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function ContactBanner() {
  return (
    <section className="site-section bg-[#eee9df]">
      <div className="site-container flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div data-reveal="left"><p className="site-eyebrow text-[#a24b2c]">Your next step</p><h2 className="site-title mt-3">Let’s make billing easier.</h2><p className="mt-4 max-w-xl leading-7 text-slate-600">Start with a conversation about your practice and the support you need.</p></div>
        <Link href="/contact" data-reveal="zoom" data-reveal-delay="0.2" className="site-button self-start md:self-auto">Let’s talk <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
