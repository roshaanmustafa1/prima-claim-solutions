import Link from "next/link"
import { Plus } from "lucide-react"

const questions = [
  { question: "Can you help with just part of our billing?", answer: "We can discuss focused support, such as denied claims or insurance follow-up, as well as broader billing needs. The scope is agreed with your practice before work starts." },
  { question: "Will we need to change our practice software?", answer: "We start by reviewing your current software and workflow. We’ll explain access requirements and compatibility before agreeing on a plan." },
  { question: "How do you determine pricing?", answer: "Pricing depends on the services, claim volume, and work involved. Contact us to discuss your practice and request a proposal." },
  { question: "What should we share in our first enquiry?", answer: "Your practice name, specialty, and the billing challenges you want to address are enough to begin. Please do not send patient information or medical records through the enquiry form." },
]

export function CommonQuestions() {
  return (
    <section className="site-section">
      <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal="left"><p className="site-eyebrow text-[#a24b2c]">A few things to know</p><h2 className="site-title mt-3">Questions before<br />we get started?</h2><p className="mt-5 max-w-sm leading-7 text-slate-600">Here are a few practical details. For anything specific to your practice, <Link href="/contact" className="font-semibold text-[#193c43] underline underline-offset-4">get in touch</Link>.</p></div>
        <div data-reveal="right" data-reveal-delay="0.15" className="border-t border-[#dce2d7]">{questions.map((item) => <details key={item.question} className="group border-b border-[#dce2d7] py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold [&::-webkit-details-marker]:hidden">{item.question}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" /></summary><p className="mt-4 max-w-2xl pr-6 text-sm leading-7 text-slate-600">{item.answer}</p></details>)}</div>
      </div>
    </section>
  )
}
