import { z } from 'zod'

export const addNewWatchSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(2, 'Name is required'),
  description: z.string({ required_error: "Description can't be empty" }),
  price: z.string({ required_error: 'Price is required' }),
  brand: z.string({ required_error: 'Brand is required' }),
  image: z.string({ required_error: 'Image is required' })
})

export const editWatchSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(2, 'Name is required'),
  description: z.string({ required_error: "Description can't be empty" }),
  price: z.string({ required_error: 'Price is required' }),
  brand: z.string({ required_error: 'Brand is required' }),
  image: z.string({ required_error: 'Image is required' })
})

export const BrandSchema = z.object({
  brandName: z.string({ required_error: 'Brand name is required' }).min(2, 'Brand name is too short')
})
