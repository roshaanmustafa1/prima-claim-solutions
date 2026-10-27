import { ScrollImage } from "@/components/shared/ScrollImage"
import { ArrowRight, Check } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-svh bg-[#f2f4ee] lg:h-svh lg:min-h-0">
      <div className="site-container grid min-h-[inherit] items-center gap-8 pt-[calc(var(--header-height)+2rem)] pb-8 lg:h-full lg:min-h-0 lg:grid-cols-[1.1fr_1fr] lg:grid-rows-[minmax(0,1fr)] lg:gap-12 lg:pt-[calc(var(--header-height)+clamp(1rem,4svh,3rem))] lg:pb-[clamp(1rem,4svh,3rem)]">
        <div className="hero-stagger">
          <p className="site-eyebrow">For physicians. For your practice.</p>
          <h1 className="hero-title mt-4 max-w-xl font-serif text-4xl leading-[1.08] tracking-tight text-[#193c43] sm:text-5xl lg:text-[clamp(2.5rem,7svh,4rem)]"><span className="hero-line"><span>Your patients come first.</span></span><span className="hero-line text-[#a24b2c]"><span>We handle the billing.</span></span></h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 lg:text-lg">Medical billing, claim follow-up, and denial management for healthcare practices. Less paperwork for your team. More focus on patient care.</p>
          <div className="mt-6 flex flex-wrap items-center gap-5"><a href="/contact" className="site-button">Talk about your practice <ArrowRight size={17} aria-hidden="true" /></a><a href="#services" className="text-sm font-semibold text-[#193c43] underline underline-offset-4">Explore our services</a></div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#d9dfd5] pt-4 text-sm text-slate-600">{["Medical billing", "Insurance follow-up", "Practice support"].map((item) => <span key={item} className="inline-flex items-center gap-2"><Check size={15} className="text-[#56725d]" aria-hidden="true" />{item}</span>)}</div>
        </div>
        <div className="hero-visual relative hidden min-h-0 pb-7 lg:block lg:h-full lg:max-h-[640px] lg:pl-4">
          <div className="relative h-full overflow-hidden rounded-t-[100px] rounded-b-xl bg-[#dce2d8]"><ScrollImage src="/images/doctor-chart-review.webp" alt="Physician holding a tablet in a clinical setting" priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-[58%_center]" /></div>
          <div className="absolute bottom-0 left-3 right-3 flex items-center gap-4 rounded-lg border border-[#e5e8df] bg-[#fcfcf9] p-5 shadow-sm sm:left-10 sm:right-10"><span className="h-9 w-1 shrink-0 rounded-full bg-[#b85e3b]" /><div><p className="text-base font-semibold text-[#193c43]">A billing partner for your practice.</p><p className="mt-1 text-sm text-slate-500">From the first claim to the final payment.</p></div></div>
        </div>
      </div>
    </section>
  )
}
