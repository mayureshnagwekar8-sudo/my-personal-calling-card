export const profile = {
  name: 'Alex Morgan',
  role: 'Product Designer & Frontend Engineer',
  location: 'Lisbon, Portugal',
  email: 'hello@alexmorgan.dev',
  availability: 'Open to freelance & full-time roles',
}

export const socials = [
  { label: 'GitHub', handle: '@alexmorgan', href: 'https://github.com' },
  { label: 'LinkedIn', handle: 'in/alexmorgan', href: 'https://linkedin.com' },
  { label: 'X / Twitter', handle: '@alexmakes', href: 'https://x.com' },
  { label: 'Dribbble', handle: 'alexmorgan', href: 'https://dribbble.com' },
]

export type Project = {
  title: string
  year: string
  description: string
  tags: string[]
  href: string
}

export const projects: Project[] = [
  {
    title: 'Ledgerly',
    year: '2026',
    description:
      'A calm, keyboard-first budgeting app for freelancers. Designed the system end to end and built the web client.',
    tags: ['Product Design', 'Next.js', 'TypeScript'],
    href: '#',
  },
  {
    title: 'Fieldnotes',
    year: '2025',
    description:
      'A collaborative research repository that turns interview transcripts into searchable, taggable insights.',
    tags: ['UX Research', 'React', 'Design System'],
    href: '#',
  },
  {
    title: 'Tidewater Coffee',
    year: '2025',
    description:
      'E-commerce redesign for an independent roaster — conversion up 32% after launch with a lighter checkout flow.',
    tags: ['E-commerce', 'Product Design', 'Next.js'],
    href: '#',
  },
  {
    title: 'Atlas UI',
    year: '2024',
    description:
      'An open-source, accessible component library with 40+ primitives, documented tokens, and theming support.',
    tags: ['Design System', 'React', 'Accessibility'],
    href: '#',
  },
  {
    title: 'Pulse Health',
    year: '2023',
    description:
      'A patient dashboard that simplifies lab results into plain language, tested with 60+ participants.',
    tags: ['UX Research', 'Accessibility', 'TypeScript'],
    href: '#',
  },
]

export const skillGroups = [
  {
    title: 'Design',
    skills: ['Product strategy', 'Interaction design', 'Prototyping', 'Design systems', 'Figma', 'User research'],
  },
  {
    title: 'Engineering',
    skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Craft',
    skills: ['Accessibility (WCAG)', 'Motion design', 'Performance', 'Technical writing', 'Mentoring'],
  },
]
