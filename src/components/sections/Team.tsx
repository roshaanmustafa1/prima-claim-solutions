import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { teamMembers } from "@/config/team"

export function Team() {
  return (
    <section id="team" className="site-section border-t border-[#e1e5de]">
      <div className="site-container">
        <div data-reveal className="grid gap-5 md:grid-cols-2 md:items-end">
          <div>
            <p className="site-eyebrow text-[#a24b2c]">Meet the team</p>
            <h2 className="site-title mt-3">People behind the support.</h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-slate-600 md:justify-self-end">Bringing together medical billing, healthcare accounting, and software expertise to support your practice.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <article key={member.portfolio} data-reveal="zoom" data-reveal-delay={index * 0.16} className="interactive-card group overflow-hidden rounded-xl border border-[#e1e5de] bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e7ece3]">
                {member.image ? (
                  <Image src={member.image} alt={member.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-[center_25%] transition-transform duration-300 group-hover:scale-[1.03]" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center bg-[#193c43] text-[#e2e9d8]">
                    <span aria-hidden="true" className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 font-serif text-5xl">{member.initials}</span>
                    <span className="mt-5 text-[10px] uppercase tracking-[0.25em]">Technology & billing</span>
                  </div>
                )}
              </div>
              <div className="flex min-h-52 flex-col p-6">
                <h3 className="text-xl font-semibold text-[#193c43]">{member.name}</h3>
                <p className="mt-2 mb-6 text-sm leading-6 text-slate-600">{member.title}</p>
                <a href={member.portfolio} target="_blank" rel="noopener noreferrer" aria-label={`View ${member.name}’s portfolio (opens in a new tab)`} className="mt-auto inline-flex items-center gap-2 self-start border-b border-[#cad3c4] pb-1 text-sm font-semibold text-[#193c43] hover:border-[#193c43]">View portfolio <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
