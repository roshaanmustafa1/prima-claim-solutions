import Image from "next/image"
import { Check, ChevronDown } from "lucide-react"
import type { ProjectItem } from "@/config/projects"

export function ProjectCard({ project }: { project: ProjectItem }) {
  const Icon = project.icon
  const meta = [project.specialty, project.location].filter(Boolean).join(" · ")

  return (
    <article id={project.id} className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-[#d8ded4] bg-white shadow-sm">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#193c43]">
        {project.image ? (
          <>
            <Image src={project.image} alt={project.imageAlt ?? project.title} fill quality={90} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#193c43]/70 via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#193c43] to-[#2f6a63]">
            <Icon size={72} strokeWidth={1.25} className="text-white/85" aria-hidden="true" />
          </div>
        )}
        <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold tracking-widest text-[#a24b2c]">PROJECT {project.number}</span>
        <span className="absolute bottom-4 right-5 grid size-11 place-items-center rounded-full bg-white/95 text-[#193c43]"><Icon size={20} aria-hidden="true" /></span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="site-eyebrow text-[#a24b2c]">{project.industry}</p>
        <h3 className="mt-3 font-serif text-2xl leading-tight text-[#193c43]">{project.title}</h3>
        <p className="mt-3 text-sm font-semibold text-slate-700">Focus: <span className="font-normal text-slate-600">{project.focus}</span></p>
        {meta && <p className="mt-1 text-sm text-slate-500">{meta}</p>}
        <p className="mt-4 text-sm leading-7 text-slate-600">{project.overview}</p>

        {project.specialties && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Specialties covered">
            {project.specialties.map((s) => <li key={s} className="rounded-full bg-[#f2f4ee] px-3 py-1 text-xs font-medium text-[#193c43]">{s}</li>)}
          </ul>
        )}

        <details className="group mt-5 border-t border-[#e1e5de] pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-[#193c43] [&::-webkit-details-marker]:hidden">
            Key responsibilities
            <ChevronDown size={18} className="transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <ul className="mt-4 space-y-2.5">
            {project.responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><Check size={16} className="mt-1 shrink-0 text-[#2f6a63]" aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </details>

        <div className="mt-auto pt-6">
          <div className="rounded-xl bg-[#f2f4ee] p-5">
            <p className="site-eyebrow text-[#193c43]">Business impact</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">{project.impact}</p>
            {project.achievement && <p className="mt-3 border-t border-[#cfd7cd] pt-3 text-sm font-semibold leading-6 text-[#a24b2c]">{project.achievement}</p>}
            {project.expertise && <p className="mt-3 border-t border-[#cfd7cd] pt-3 text-xs font-semibold leading-6 text-[#193c43]">Core expertise: {project.expertise}</p>}
          </div>
        </div>
      </div>
    </article>
  )
}
