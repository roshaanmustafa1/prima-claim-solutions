import type { Metadata } from "next"
import { PageIntro } from "@/components/shared/PageIntro"
import { ContactBanner } from "@/components/shared/ContactBanner"
import { ProjectCard } from "@/components/shared/ProjectCard"
import { projects, rcmExpertise, whyChooseUs } from "@/config/projects"

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Selected examples of our US healthcare RCM experience: Emergency Room billing, Federal IDR and No Surprises Act recovery, AR management, and multi-specialty billing.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects & case studies"
        title="Driving better financial outcomes through smarter revenue cycle management."
        description="Our approach is built around operational efficiency, accurate claim management, strategic denial resolution, and revenue optimization."
      />

      <section className="site-section">
        <div className="site-container grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="max-w-2xl space-y-5 leading-8 text-slate-600">
            <p>Our professional experience spans 10 years in the US healthcare RCM industry, with hands-on exposure to Emergency Room billing, hospital facility revenue cycles, Federal Independent Dispute Resolution (IDR), No Surprises Act (NSA) processes, and multiple medical specialties.</p>
            <p>Below are selected examples of our professional experience and RCM expertise. Client and facility details have been kept confidential.</p>
          </div>
          <aside className="rounded-2xl bg-[#193c43] p-7 text-white sm:p-8">
            <p className="site-eyebrow text-[#e6b8a2]">Key achievement</p>
            <p className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">$200K–$300K → $2M</p>
            <p className="mt-3 text-sm leading-7 text-white/80">Supported facility-level monthly collection growth through structured RCM workflows, AR follow-up, and Federal IDR initiatives.</p>
          </aside>
        </div>
      </section>

      <section className="site-section bg-[#f2f4ee] pt-0 sm:pt-0" aria-label="Project case studies">
        <div className="site-container grid gap-8 pt-14 lg:grid-cols-2 lg:items-stretch">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <p className="site-eyebrow text-[#a24b2c]">Our core RCM expertise</p>
          <h2 className="site-title mt-3 max-w-2xl">Where our experience runs deepest.</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {rcmExpertise.map((group) => (
              <div key={group.title} className="border-t border-[#cfd7cd] pt-5">
                <h3 className="text-lg font-semibold text-[#193c43]">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section border-t border-[#e1e5de] bg-[#f2f4ee]">
        <div className="site-container">
          <p className="site-eyebrow text-[#a24b2c]">Why healthcare providers choose us</p>
          <h2 className="site-title mt-3 max-w-2xl">Experience you can build on.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <article key={item.title} className="border-t border-[#cfd7cd] pt-5">
                <span className="text-xs text-[#a24b2c]">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold text-[#193c43]">{item.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  )
}
