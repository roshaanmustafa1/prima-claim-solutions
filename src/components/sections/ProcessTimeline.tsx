const steps = [
  { title: "Tell us about your practice", description: "Share your specialty, current billing process, and what you would like to improve." },
  { title: "Agree on a plan", description: "We review your needs together and outline the services, responsibilities, and next steps." },
  { title: "Get ongoing support", description: "We coordinate billing work with your team and keep you informed as claims move forward." },
]

export function ProcessTimeline() {
  return (
    <section id="process" className="site-section border-b border-[#e1e5de]"><div className="site-container"><p className="site-eyebrow">Getting started</p><h2 className="site-title mt-3">A conversation. A clear plan. Ongoing support.</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-12">{steps.map((step, index) => <article key={step.title} data-reveal data-reveal-delay={index * 0.1} className="border-t border-[#d6ddd2] pt-5"><span className="text-sm font-semibold text-[#a24b2c]">Step 0{index + 1}</span><h3 className="mt-4 text-lg font-semibold text-[#193c43]">{step.title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{step.description}</p></article>)}</div>
    </div></section>
  )
}
