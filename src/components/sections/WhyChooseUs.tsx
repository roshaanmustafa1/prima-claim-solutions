import { ArrowUpRight } from "lucide-react"

const benefits = [
  { title: "Less administration for your team", description: "Give your staff room to focus on patients while we handle billing tasks and payer follow-ups." },
  { title: "A clearer picture of your billing", description: "See outstanding claims, payment activity, and issues that need your attention." },
  { title: "Support that fits your practice", description: "Start with your current workflow. We discuss your software, specialty, and priorities before recommending a plan." },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#193c43] text-white"><div className="site-container grid gap-12 py-16 lg:grid-cols-2 lg:gap-24 lg:py-20">
      <div data-reveal="left"><p className="site-eyebrow text-[#c8d5c3]">Why Prime Claim Solutions</p><h2 className="site-title mt-4 text-white">Good billing support<br />should make work easier.</h2><p className="mt-5 max-w-md leading-7 text-[#d0dcdd]">We help physicians and practice managers stay on top of the business side of care, with straightforward communication and practical support.</p><a href="/contact" className="mt-7 inline-flex items-center gap-2 border-b border-[#6e898d] pb-1 text-sm font-semibold">Let’s discuss your needs <ArrowUpRight size={18} aria-hidden="true" /></a></div>
      <div className="divide-y divide-white/15">{benefits.map((item, index) => <div key={item.title} data-reveal="right" data-reveal-delay={index * 0.14} className="flex gap-5 py-6 first:pt-0 last:pb-0"><span className="pt-1 text-xs text-[#a5bdb5]">0{index + 1}</span><div><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 max-w-md text-sm leading-7 text-[#d0dcdd]">{item.description}</p></div></div>)}</div>
    </div></section>
  )
}
