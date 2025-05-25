export interface Product {
  id: string
  title: string
  description: string
  category: string
  availability: boolean
  images: string[]
  variations: {
    name: string
    price: number
    originalPrice?: number
    subPrice?: string
    features?: string[]
  }[]
}
