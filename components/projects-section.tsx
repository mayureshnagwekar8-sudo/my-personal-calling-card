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
        <ul className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="flex min-h-80 flex-col rounded-2xl border border-border bg-card p-8 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 md:p-10"
            >
              <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-balance md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-muted-foreground text-pretty">
                {project.description}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Badge variant="secondary" className="h-7 bg-accent px-3 text-sm text-accent-foreground">
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
