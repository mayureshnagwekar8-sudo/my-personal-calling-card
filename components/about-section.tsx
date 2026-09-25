import Image from 'next/image'
import { ArrowDown, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.4fr_1fr] md:items-end md:pt-24">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1
            id="about-heading"
            className="font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl"
          >
            I design and build <em className="text-accent">thoughtful</em> digital products.
          </h1>
          <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              {"Hi, I'm Alex — a "}
              {profile.role.toLowerCase()}
              {' with 8 years of experience turning messy problems into clear, usable interfaces.'}
            </p>
            <p>
              I care about the details most people never notice: accessible defaults, honest copy, and
              interactions that feel quick. I&apos;ve worked with early-stage startups and design teams at
              scale, and I love bridging the gap between design and code.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-medium underline decoration-accent decoration-2 underline-offset-4 hover:decoration-foreground"
            >
              See selected work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src="/images/portrait.png"
              alt={`Portrait of ${profile.name}`}
              width={800}
              height={1000}
              priority
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
            {[
              ['8+', 'Years'],
              ['40+', 'Projects'],
              ['12', 'Clients'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-border bg-card px-2 py-3">
                <dt className="text-xs text-muted-foreground">{label}</dt>
                <dd className="font-serif text-2xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
