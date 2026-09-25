export function SectionHeading({
  id,
  index,
  title,
  description,
}: {
  id: string
  index: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-2 font-mono text-xs tracking-widest text-accent uppercase">{index}</p>
        <h2 id={id} className="font-serif text-4xl tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-sm text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </div>
  )
}
