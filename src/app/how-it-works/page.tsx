import type { Metadata } from "next"
import { PageIntro } from "@/components/shared/PageIntro"
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"
import { CommonQuestions } from "@/components/sections/CommonQuestions"
import { ContactBanner } from "@/components/shared/ContactBanner"

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how we review your billing needs, agree on a service plan, and coordinate ongoing support with your practice.",
  alternates: { canonical: "/how-it-works" },
}

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro eyebrow="How it works" title="A thoughtful start. A simpler working relationship." description="From the first conversation to everyday billing support, we keep the process clear so your team knows what comes next." />
      <ProcessTimeline />
      <section className="bg-[#f2f4ee] py-12"><div className="site-container grid gap-6 md:grid-cols-2 md:gap-20"><h2 className="text-2xl font-semibold">What to bring to our first conversation</h2><p className="max-w-xl leading-8 text-slate-600">Your specialty, practice size, current billing software, and the issues you want to address. There is no need to send patient records with your enquiry.</p></div></section>
      <CommonQuestions />
      <ContactBanner />
    </>
  )
}
