'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags))).sort()]

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState('All')
  const visible = activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading
          id="projects-heading"
          index="01 — Work"
          title="Selected projects"
          description="A few recent things I've designed, built, or both. Filter by discipline or stack."
        />

        <div role="group" aria-label="Filter projects by tag" className="mb-8 flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const active = tag === activeTag
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
                  active
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground',
                )}
              >
                {tag}
              </button>
            )
          })}
        </div>

        <ul className="flex flex-col gap-6" aria-live="polite">
          {visible.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                className="group grid gap-6 rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none md:min-h-56 md:grid-cols-[4rem_1fr_auto] md:items-start md:gap-10 md:p-12"
              >
                <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
                <div>
                  <h3 className="flex items-center gap-2 font-serif text-4xl tracking-tight transition-colors group-hover:text-accent md:text-5xl">
                    {project.title}
                    <ArrowUpRight
                      className="size-6 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                    {project.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-1.5 md:max-w-56 md:justify-end" aria-label="Tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Badge
                        variant="outline"
                        className={cn(
                          'h-6 bg-card px-2.5',
                          tag === activeTag && 'border-accent text-accent',
                        )}
                      >
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
