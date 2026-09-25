import { profile } from '@/lib/portfolio-data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-xl tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm">
            {links.map((link) => (
              <li key={link.href} className="hidden sm:block">
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="ml-2 inline-flex h-9 items-center rounded-full bg-primary px-4 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
