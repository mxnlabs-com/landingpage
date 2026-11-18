// src/types/index.ts
export type Service = {
    slug: string
    title: string
    shortDescription: string
    description: string
    image: string
    icon: string // ruta del ícono, ej. '/icons/vida.svg'
  }

// src/types/index.ts
export type Testimonial = {
    id: string
    quote: string
    name: string
    role: string
  }  

// types/index.ts  (agrega este tipo al final)
export type FaqItem = {
  id: string
  question: string
  answer: string
}