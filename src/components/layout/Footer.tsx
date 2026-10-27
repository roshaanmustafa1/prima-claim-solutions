import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"
import { navItems, siteConfig } from "@/config/site"
import { Brand } from "@/components/shared/Brand"

const serviceLinks = ["Medical billing & coding", "Eligibility & authorizations", "Denials & unpaid claims", "Payment posting & reporting"]

export function Footer() {
  return (
    <footer className="overflow-x-clip bg-[#15343b] text-[#d2dedd]">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 border-b border-white/15 py-10 md:flex-row md:items-center lg:py-14">
          <div data-reveal="left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c3d1bc]">Patient care is your focus. Billing is ours.</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#f6f5ed] sm:text-4xl">A little less paperwork.<br className="sm:hidden" /> A little more peace of mind.</h2>
          </div>
          <Link href="/contact" data-reveal="right" data-reveal-delay="0.15" className="inline-flex items-center gap-3 self-start rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:shrink-0 md:self-auto">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1.1fr_1.1fr] lg:gap-12 lg:py-16">
          <div data-reveal>
            <Brand inverse />
            <p className="mt-5 max-w-xs text-sm leading-7 text-[#b4c8c5]">Practical billing support for the people who care for patients. From your first claim to your next step forward.</p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-[#c3d1bc]"><span className="h-1.5 w-1.5 rounded-full bg-[#c3d1bc]" />Built around your practice</span>
          </div>
          <nav aria-label="Explore" data-reveal data-reveal-delay="0.1">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">Explore</h3>
            <ul className="space-y-3"><li><Link href="/" className="text-sm hover:text-white">Home</Link></li>{navItems.filter((item) => item.href !== "/#services").map((item) => <li key={item.href}><Link href={item.href} className="text-sm hover:text-white">{item.label}</Link></li>)}</ul>
          </nav>
          <nav aria-label="Billing services" data-reveal data-reveal-delay="0.2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">Our services</h3>
            <ul className="space-y-3">{serviceLinks.map((service) => <li key={service}><Link href="/#services" className="text-sm leading-6 hover:text-white">{service}</Link></li>)}</ul>
          </nav>
          <div data-reveal data-reveal-delay="0.3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">Let’s connect</h3>
            <p className="text-sm leading-7 text-[#b4c8c5]">Have a question about billing support? Tell us about your practice.</p>
            <a href={`mailto:${siteConfig.links.email}`} className="mt-4 inline-flex max-w-full items-start gap-2 text-sm text-[#f6f5ed] hover:underline"><Mail size={16} className="mt-0.5 shrink-0" aria-hidden="true" /><span className="break-all">{siteConfig.links.email}</span></a>
            <p className="mt-4 text-xs leading-6 text-[#b4c8c5]">For general enquiries only. Please do not send patient information.</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/15 py-6 text-xs text-[#adc1bf] sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Medical billing. Clear communication. Practical support.</p>
        </div>
      </div>
    </footer>
  )
}
