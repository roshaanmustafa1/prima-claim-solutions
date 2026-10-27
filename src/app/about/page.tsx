import type { Metadata } from "next"
import Link from "next/link"
import { PageIntro } from "@/components/shared/PageIntro"
import { ContactBanner } from "@/components/shared/ContactBanner"
import { Team } from "@/components/sections/Team"
import { EditorialImage } from "@/components/shared/EditorialImage"

export const metadata: Metadata = {
  title: "About Us",
  description: "Get to know Prime Claim Solutions and our practical, physician-focused approach to medical billing support.",
  alternates: { canonical: "/about" },
}

const values = [
  { title: "Clarity", description: "Straightforward communication about the work, the next steps, and what your team needs to know." },
  { title: "Attention to detail", description: "Careful handling of the billing tasks and follow-ups that can otherwise get lost in a busy day." },
  { title: "Collaboration", description: "A working relationship shaped around your practice’s priorities and day-to-day workflow." },
]

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About us" title="Behind every practice is work that deserves care." description="Prime Claim Solutions provides medical billing and revenue cycle support, helping healthcare teams manage the administrative work behind patient care." />
      <section className="site-section"><div className="site-container grid gap-8 lg:grid-cols-2 lg:gap-20"><div><p className="site-eyebrow text-[#a24b2c]">Our purpose</p><h2 className="site-title mt-3 max-w-xl">Help your practice spend more time on what matters.</h2></div><div className="max-w-xl space-y-5 leading-8 text-slate-600"><p>Billing involves more than submitting a claim. It means checking coverage, keeping records organized, understanding payer responses, and following through on unpaid balances.</p><p>We bring those tasks into a clear plan of support. Whether you need help with a specific part of billing or a broader workflow, we begin with your practice’s needs.</p><Link href="/#services" className="inline-block font-semibold text-[#193c43] underline underline-offset-4">Explore our services</Link></div></div></section>
      <section className="site-section bg-[#f2f4ee]"><div className="site-container"><p className="site-eyebrow text-[#a24b2c]">How we approach our work</p><h2 className="site-title mt-3">Simple principles. Everyday practice.</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{values.map((value, index) => <article key={value.title} className="border-t border-[#cfd7cd] pt-5"><span className="text-xs text-[#a24b2c]">0{index + 1}</span><h3 className="mt-4 text-xl font-semibold">{value.title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{value.description}</p></article>)}</div></div></section>
      <section className="site-section border-t border-[#e1e5de]">
        <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <EditorialImage src="/images/hospital-rcm-team.webp" alt="Healthcare and administrative professionals reviewing revenue cycle information in a meeting" caption="A coordinated approach to the work behind patient care." />
          <div><p className="site-eyebrow text-[#a24b2c]">Working together</p><h2 className="site-title mt-3">Clinical priorities.<br />Practical billing support.</h2><p className="mt-5 max-w-lg leading-8 text-slate-600">Billing works best when the people handling claims understand what your practice needs. We focus on clear responsibilities and communication, so your team knows who to turn to.</p></div>
        </div>
      </section>
      <Team />
      <ContactBanner />
    </>
  )
}
