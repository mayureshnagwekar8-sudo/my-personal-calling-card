import { ArrowUpRight, Mail } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { SectionHeading } from '@/components/section-heading'
import { profile, socials } from '@/lib/portfolio-data'

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading id="contact-heading" index="03 — Contact" title="Let's work together" />
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Have a project in mind, a role to fill, or just want to say hi? Send a note and I&apos;ll
              reply within two business days.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-fit items-center gap-2 font-serif text-2xl underline decoration-accent decoration-2 underline-offset-6 hover:decoration-foreground"
            >
              <Mail className="size-5" aria-hidden="true" />
              {profile.email}
            </a>
            <div>
              <h3 className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Elsewhere
              </h3>
              <ul className="divide-y divide-border border-y border-border">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 text-sm"
                    >
                      <span className="font-medium">{social.label}</span>
                      <span className="flex items-center gap-1.5 text-muted-foreground transition-colors group-hover:text-accent">
                        {social.handle}
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
