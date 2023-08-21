import z from 'zod'

const comentarSchema = z.object({
  user: z.string({
    invalid_type_error: 'Title must be a string',
    required_error: 'title is required.'
  }),
  text: z.string({
    invalid_type_error: 'text must be a string',
    required_error: 'text is required.'
  }),
  
})

export function validateComentar (input) {
  return comentarSchema.safeParse(input)
}

export function validatePartialComentar (input) {
  return comentarSchema.partial().safeParse(input)
}