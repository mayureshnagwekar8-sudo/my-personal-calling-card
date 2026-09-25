import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-border bg-muted/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-5 font-mono text-xs font-medium tracking-widest text-primary uppercase">Portfolio</p>
        <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-primary text-balance md:text-2xl">{profile.role}</p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
          {profile.intro}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email
          </a>
          <a
            href={profile.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-primary/30 bg-background px-5 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-sm focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
