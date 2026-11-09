export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
  features: string[]
  slug: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

export interface PricingPackage {
  id: number
  name: string
  description: string
  price: string
  features: string[]
  highlighted: boolean
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  eventType: string
  services: string[]
  eventDate: string
  message: string
}

export interface FAQ {
  id: number
  question: string
  answer: string
}
