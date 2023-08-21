import z from 'zod'

const comentarSchema = z.object({

  user: z.string(),
  text: z.string(),
  
})

export function validateComentar (input) {
  return comentarSchema.safeParse(input)
}

export function validatePartialComentar (input) {
  return comentarSchema.partial().safeParse(input)
}