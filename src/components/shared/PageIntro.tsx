import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface PageIntroProps {
  eyebrow: string
  title: string
  description: string
  contactLink?: boolean
}

export function PageIntro({ eyebrow, title, description, contactLink = true }: PageIntroProps) {
  return (
    <section className="border-b border-[#e1e5de] bg-[#f2f4ee] pt-[calc(var(--header-height)+3.5rem)] pb-14 sm:pt-[calc(var(--header-height)+5rem)] sm:pb-20">
      <div className="site-container">
        <div className="mb-10 flex items-center gap-3 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#193c43]">Home</Link>
          <span aria-hidden="true">/</span><span>{eyebrow}</span>
        </div>
        <div className="hero-stagger grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
          <div><p className="site-eyebrow text-[#a24b2c]">{eyebrow}</p><h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1></div>
          <div><p className="max-w-lg text-base leading-8 text-slate-600">{description}</p>{contactLink && <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">Talk about your practice <ArrowUpRight size={17} aria-hidden="true" /></Link>}</div>
        </div>
      </div>
    </section>
  )
}
