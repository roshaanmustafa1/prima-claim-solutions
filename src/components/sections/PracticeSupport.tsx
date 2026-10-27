import Link from "next/link"
import { ArrowUpRight, Clock3, FileWarning, PhoneCall, ChartNoAxesCombined } from "lucide-react"
import { ScrollImage } from "@/components/shared/ScrollImage"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const needs = [
  { icon: Clock3, title: "Delayed claim payments" },
  { icon: FileWarning, title: "Recurring denials" },
  { icon: PhoneCall, title: "Time spent on payer calls" },
  { icon: ChartNoAxesCombined, title: "Unclear outstanding balances" },
]

export function PracticeSupport() {
  return (
    <section id="practice-support" data-reveal-managed className="site-section bg-[#f2f4ee]">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16 xl:gap-24">
        <ScrollReveal as="figure" direction="left" className="min-w-0" contentClassName="relative overflow-hidden rounded-2xl bg-[#dce2d8]">
          <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[1/1]">
            <ScrollImage src="/images/patient-insurance-desk.webp" alt="Clinic staff member discussing insurance information with a patient at reception" sizes="(min-width: 1024px) 45vw, 100vw" className="object-[45%_center]" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#102e35]/85 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <span className="mb-3 block h-px w-10 bg-[#e2bc9c]" aria-hidden="true" />
            <p className="font-serif text-2xl leading-tight sm:text-3xl">Care comes first.</p>
            <p className="mt-2 text-sm text-white/80">Support for everything behind it.</p>
          </figcaption>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.12} className="min-w-0 py-2">
          <p className="site-eyebrow text-[#a24b2c]">Built around your day</p>
          <h2 className="site-title mt-4 max-w-xl">Your team has enough on its plate.</h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">When billing takes time away from patients, we help handle the details—so your team can focus on the people in front of them.</p>
          <div className="mt-7 border-t border-[#d3dbcf] pt-6">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Where we can help</h3>
            <ul className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {needs.map(({ icon: Icon, title }) => (
                <li key={title} className="flex items-start gap-3">
                  <Icon size={19} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#a24b2c]" aria-hidden="true" />
                  <span className="text-sm leading-6 text-[#193c43]">{title}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/why-prime-claim" className="site-button mt-8">Get to know our approach <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <p className="mt-4 text-xs leading-6 text-slate-500">Your priorities come first. We’ll work out the right support together.</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
