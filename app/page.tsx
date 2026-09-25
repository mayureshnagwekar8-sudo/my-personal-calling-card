import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { ProjectsSection } from '@/components/projects-section'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'
import { profile } from '@/lib/portfolio-data'

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            {'© '}
            {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top" className="hover:text-foreground">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}
