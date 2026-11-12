import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/config/projects"

const featured = projects.filter((project) => project.featured)

export function FeaturedProjects() {
  return (
    <section id="projects" className="site-section bg-[#193c43] text-white">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="site-eyebrow text-[#e6b8a2]">Projects & case studies</p>
            <h2 className="site-title mt-3">Results built on 10 years of US healthcare RCM experience.</h2>
            <p className="mt-4 leading-8 text-white/75">From Emergency Room facility billing to Federal IDR and AR recovery, here is a selection of the work behind our approach.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 lg:max-w-xs">
            <p className="font-serif text-3xl leading-tight sm:text-4xl">$200K–$300K → $2M</p>
            <p className="mt-2 text-sm leading-6 text-white/75">Facility-level monthly collection growth supported through structured RCM and Federal IDR workflows.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <Link key={project.id} href={`/projects#${project.id}`} className="group flex flex-col overflow-hidden rounded-2xl bg-white text-[#193c43] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                {project.image && <Image src={project.image} alt={project.imageAlt ?? project.title} fill quality={90} sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />}
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold tracking-widest text-[#a24b2c]">PROJECT {project.number}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="site-eyebrow text-[#a24b2c]">{project.specialty ?? project.industry}</p>
                <h3 className="mt-3 font-serif text-xl leading-snug">{project.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">{project.impact}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold">Read more <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10">View all projects <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  )
}
