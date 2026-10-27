import type { Metadata } from "next"
import { PageIntro } from "@/components/shared/PageIntro"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { ContactBanner } from "@/components/shared/ContactBanner"

export const metadata: Metadata = {
  title: "Why Prime Claim",
  description: "A practical approach to medical billing: clear communication, organized follow-up, and support built around your practice.",
  alternates: { canonical: "/why-prime-claim" },
}

export default function WhyPrimeClaimPage() {
  return (
    <>
      <PageIntro eyebrow="Why Prime Claim" title="A partner in the work behind patient care." description="Your billing partner should understand the pressures on your team. Our approach starts with listening, agreeing on priorities, and keeping you informed." />
      <WhyChooseUs />
      <section className="site-section"><div className="site-container grid gap-8 md:grid-cols-2 md:gap-20"><h2 className="site-title max-w-xl">Clear expectations.<br />A shared way forward.</h2><div className="max-w-xl space-y-5 leading-8 text-slate-600"><p>Before work begins, we discuss the services you need, who is responsible for each task, and how information will be shared with your team.</p><p>We review your existing workflow and software so that the plan reflects how your practice operates. You can ask questions about the scope, reporting, and next steps before making a decision.</p></div></div></section>
      <ContactBanner />
    </>
  )
}
