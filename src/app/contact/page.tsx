import type { Metadata } from "next"
import { PageIntro } from "@/components/shared/PageIntro"
import { ConsultationForm } from "@/components/sections/ConsultationForm"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Prime Claim Solutions to discuss medical billing, denied claims, and revenue cycle support for your practice.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let’s talk about your practice." description="Have a billing challenge or a question about our services? Tell us where you need support, and we can explore the next step together." contactLink={false} />
      <ConsultationForm />
    </>
  )
}
