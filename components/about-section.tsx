import { SectionHeading } from '@/components/section-heading'
import { aboutHighlights } from '@/lib/portfolio-data'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading id="about-heading" eyebrow="About" title="About Me" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutHighlights.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-primary" aria-hidden="true" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
