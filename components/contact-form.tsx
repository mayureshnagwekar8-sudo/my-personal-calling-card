'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const initialState: ContactState = { status: 'idle' }

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center gap-3 rounded-2xl border border-border bg-card p-8"
      >
        <CheckCircle2 className="size-8 text-primary" aria-hidden="true" />
        <p className="text-xl font-semibold">Message sent</p>
        <p className="text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-xs md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={state.errors?.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Jane Doe"
            defaultValue={state.values?.name}
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? 'name-error' : undefined}
            required
            className="h-10"
          />
        </Field>
        <Field label="Email" name="email" error={state.errors?.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            defaultValue={state.values?.email}
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? 'email-error' : undefined}
            required
            className="h-10"
          />
        </Field>
      </div>
      <Field label="Message" name="message" error={state.errors?.message}>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Your message"
          defaultValue={state.values?.message}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          required
          className="min-h-36 resize-y"
        />
      </Field>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p role="alert" className="text-sm text-destructive">
          {state.status === 'error' ? state.message : null}
        </p>
        <Button type="submit" disabled={pending} className="h-11 rounded-md px-6">
          {pending ? (
            <Loader2 className="animate-spin" aria-hidden="true" />
          ) : (
            <Send aria-hidden="true" />
          )}
          {pending ? 'Sending…' : 'Send Message'}
        </Button>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string
  name: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
