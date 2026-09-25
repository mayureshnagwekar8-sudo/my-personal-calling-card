'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'message', string>>
  values?: { name: string; email: string; message: string }
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
  }

  // Honeypot: real users never fill this hidden field.
  if (formData.get('company')) {
    return { status: 'success', message: 'Thanks! Your message is on its way.' }
  }

  const errors: ContactState['errors'] = {}
  if (values.name.length < 2 || values.name.length > 100) errors.name = 'Please enter your name.'
  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 200)
    errors.email = 'Please enter a valid email address.'
  if (values.message.length < 10 || values.message.length > 5000)
    errors.message = 'Your message should be between 10 and 5000 characters.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors, values }
  }

  // Connect an email provider (e.g. Resend) here to deliver messages to your inbox.
  console.log('[contact] New message from', values.email)

  return { status: 'success', message: `Thanks, ${values.name}! I'll get back to you within two days.` }
}
