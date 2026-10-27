"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, Mail } from "lucide-react"
import { siteConfig } from "@/config/site"

export function ConsultationForm() {
  const [draftOpened, setDraftOpened] = useState(false)

  const openEmailDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = `Billing support enquiry — ${form.get("practiceName")}`
    const body = [
      `Name: ${form.get("fullName")}`,
      `Practice: ${form.get("practiceName")}`,
      `Email: ${form.get("email")}`,
      "",
      String(form.get("message") || "I would like to discuss medical billing support for my practice."),
    ].join("\n")
    window.location.href = `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setDraftOpened(true)
  }

  return (
    <section id="audit-form" className="site-section">
      <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div data-reveal="left">
          <p className="site-eyebrow">Let’s talk</p>
          <h2 className="site-title mt-3">A better billing experience starts here.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-600">Tell us a little about your practice and where you need support. We can discuss your workflow, answer your questions, and explore the right fit.</p>
          <a href={`mailto:${siteConfig.links.email}`} className="mt-8 inline-flex max-w-full items-center gap-3 text-sm font-semibold text-[#193c43]"><Mail size={19} className="shrink-0" aria-hidden="true" /><span className="break-all">{siteConfig.links.email}</span></a>
          <p className="mt-4 text-sm leading-6 text-slate-500">Prefer to email directly? Tell us your practice name and the billing services you are interested in.</p>
        </div>
        <form data-reveal="right" data-reveal-delay="0.15" onSubmit={openEmailDraft} className="rounded-xl border border-[#e1e5de] bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-[#193c43]">Tell us about your practice</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">We’ll prepare an email for you to review and send.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div><label htmlFor="fullName" className="site-label">Your name <span aria-hidden="true">*</span></label><input id="fullName" name="fullName" autoComplete="name" required minLength={2} maxLength={100} className="site-input" placeholder="Dr. Jane Smith" /></div>
            <div><label htmlFor="practiceName" className="site-label">Practice name <span aria-hidden="true">*</span></label><input id="practiceName" name="practiceName" autoComplete="organization" required minLength={2} maxLength={150} className="site-input" placeholder="Your practice" /></div>
            <div className="sm:col-span-2"><label htmlFor="email" className="site-label">Work email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className="site-input" placeholder="you@yourpractice.com" /></div>
            <div className="sm:col-span-2"><label htmlFor="message" className="site-label">How can we help? <span className="font-normal text-slate-400">(optional)</span></label><textarea id="message" name="message" rows={3} maxLength={1000} aria-describedby="contact-privacy" className="site-input resize-y" placeholder="For example, help with denied claims or ongoing billing support." /></div>
          </div>
          <p id="contact-privacy" className="mt-3 text-xs leading-6 text-slate-500">Please do not include patient details or medical records.</p>
          <button type="submit" className="site-button mt-5 w-full">Prepare email <ArrowUpRight size={17} aria-hidden="true" /></button>
          <p className="mt-3 text-center text-xs leading-5 text-slate-500">Opens your email app. Your message is sent when you send the email.</p>
          {draftOpened && <p role="status" className="mt-4 rounded-md bg-[#f2f4ee] p-3 text-sm leading-6 text-[#193c43]">Your email app should open with a draft. If it doesn’t, email us directly at <a className="break-all underline" href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a>.</p>}
        </form>
      </div>
    </section>
  )
}
