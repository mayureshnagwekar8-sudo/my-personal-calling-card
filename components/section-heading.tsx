export function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-xs font-medium tracking-widest text-primary uppercase">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
