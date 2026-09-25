import { ArrowUpRight, Mail } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/lib/portfolio-data'

export function ContactSection() {
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: 'LinkedIn', value: profile.linkedin.label, href: profile.linkedin.href, external: true },
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-border bg-muted/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading id="contact-heading" eyebrow="Contact" title="Get in Touch" />
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    {link.external ? (
                      <ArrowUpRight className="size-5" aria-hidden="true" />
                    ) : (
                      <Mail className="size-5" aria-hidden="true" />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{link.label}</span>
                    <span className="block truncate text-sm text-muted-foreground transition-colors group-hover:text-primary">
                      {link.value}
                    </span>
                  </span>
                  {link.external ? <span className="sr-only">(opens in a new tab)</span> : null}
                </a>
              </li>
            ))}
          </ul>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
