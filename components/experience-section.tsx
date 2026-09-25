import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading id="experience-heading" eyebrow="Experience" title="Experience" />
        <ol className="flex flex-col gap-4">
          {experience.map((item) => (
            <li
              key={item.role}
              className="flex flex-col gap-1 rounded-xl border border-border bg-card px-6 py-5 shadow-xs transition-colors hover:border-primary/30 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <h3 className="font-semibold">{item.role}</h3>
              <p className="text-muted-foreground sm:text-right">{item.org}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
