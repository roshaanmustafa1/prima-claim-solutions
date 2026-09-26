import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"
import { StatsCounter } from "@/components/sections/StatsCounter"
import { About } from "@/components/sections/About"
import { Testimonials } from "@/components/sections/Testimonials"
import { ConsultationForm } from "@/components/sections/ConsultationForm"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Value Prop & Interactive Dashboard Preview */}
        <Hero />

        {/* 2. Interactive 6-Service Cards Grid */}
        <Services />

        {/* 3. High-Contrast Enterprise Security, HIPAA & EHR Integrations */}
        <WhyChooseUs />

        {/* 4. 6-Stage Process Workflow & Turnaround SLAs */}
        <ProcessTimeline />

        {/* 5. Viewport-Triggered Animated Performance Counters */}
        <StatsCounter />

        {/* 6. In-Depth Comparison Matrix & Physician-First Philosophy */}
        <About />

        {/* 7. Verified Client Testimonials & Objections Pre-emption FAQ */}
        <Testimonials />

        {/* 8. High-Conversion 14-Point RCM Diagnostic Intake Form */}
        <ConsultationForm />
      </main>

      {/* Enterprise 4-Column Footer */}
      <Footer />
    </div>
  )
}
