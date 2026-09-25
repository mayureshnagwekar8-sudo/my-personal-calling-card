import { profile } from '@/lib/portfolio-data'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#research', label: 'Research' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3 md:h-16 md:flex-row md:items-center md:justify-between md:py-0">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Main" className="-mx-3 overflow-x-auto">
          <ul className="flex items-center gap-1 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 whitespace-nowrap text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
