import { BookOpen } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { publication } from '@/lib/portfolio-data'

export function ResearchSection() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="scroll-mt-24 border-t border-border bg-muted/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading id="research-heading" eyebrow="Research" title="Research & Publication" />
        <article className="flex flex-col gap-5 rounded-xl border border-border border-l-4 border-l-primary bg-card p-7 shadow-xs md:flex-row md:p-9">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
            <BookOpen className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-mono text-xs font-medium tracking-widest text-primary uppercase">
              {publication.venue}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-balance md:text-2xl">
              {publication.title}
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground text-pretty">
              {publication.summary}
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
