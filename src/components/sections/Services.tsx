import { FileText, ClipboardCheck, RotateCcw, ChartNoAxesCombined } from "lucide-react"

const services = [
  { icon: FileText, title: "Medical billing & coding", description: "Prepare and submit claims with attention to coding, documentation, and payer requirements." },
  { icon: ClipboardCheck, title: "Eligibility & authorizations", description: "Check insurance coverage and coordinate prior authorizations before patient visits." },
  { icon: RotateCcw, title: "Denials & unpaid claims", description: "Investigate denials, follow up with insurers, and work through outstanding balances." },
  { icon: ChartNoAxesCombined, title: "Payment posting & reporting", description: "Keep payment records organized and understand what is paid, pending, or needs attention." },
]

export function Services() {
  return (
    <section id="services" className="site-section"><div className="site-container">
      <div data-reveal className="grid gap-5 md:grid-cols-2 md:items-end"><div><p className="site-eyebrow">What we do</p><h2 className="site-title mt-3">The billing support<br />your practice needs.</h2></div><p className="max-w-md text-base leading-7 text-slate-600 md:justify-self-end">Support across your revenue cycle, with services tailored to your practice’s workflow.</p></div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, title, description }, index) => (
        <article key={title} data-reveal data-reveal-delay={index * 0.14} className="interactive-card rounded-lg border border-[#e1e5de] bg-white p-6 lg:p-7"><div className="mb-9 flex items-center justify-between"><Icon size={26} strokeWidth={1.4} className="text-[#43624f]" aria-hidden="true" /><span className="text-xs text-slate-400">0{index + 1}</span></div><h3 className="text-lg font-semibold leading-snug text-[#193c43]">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></article>
      ))}</div>
    </div></section>
  )
}
