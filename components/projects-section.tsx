import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/portfolio-data'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t border-border bg-muted/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading id="projects-heading" eyebrow="Projects" title="Selected Projects" />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-balance">{project.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground text-pretty">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Badge variant="secondary" className="h-6 bg-accent px-2.5 text-accent-foreground">
                      {tag}
                    </Badge>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
