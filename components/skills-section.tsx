import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading
          id="skills-heading"
          index="02 — Toolkit"
          title="Skills"
          description="The disciplines and tools I reach for every day, from first sketch to production."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-5 font-serif text-2xl">{group.title}</h3>
              <ul className="flex flex-col">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 border-t border-border py-2.5 text-sm first:border-t-0"
                  >
                    <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
