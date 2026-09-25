import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading id="skills-heading" eyebrow="Skills" title="Technical Skills" />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-border bg-card p-6 shadow-xs">
              <h3 className="mb-4 font-semibold text-primary">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-muted px-3 py-1.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
                  >
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
