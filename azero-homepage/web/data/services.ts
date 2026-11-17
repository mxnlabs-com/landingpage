import type { Service } from '@/types'

const placeholder =
  'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.'

export const services: Service[] = [
  {
    slug: 'vida',
    title: 'Seguro de Vida',
    shortDescription: 'Respaldo económico para tu familia cuando más lo necesita, para que sus planes sigan adelante.',
    description: 'Respaldo económico para tu familia cuando más lo necesita, para que sus planes sigan adelante.',
    image: '/icons/vida.svg',
    icon: '/icons/vida.svg',
  },
  {
    slug: 'hogar',
    title: 'Hogar',
    shortDescription: 'Protege tu casa y tus pertenencias ante imprevistos, para que vivas con tranquilidad.',
    description: 'Descripción completa del seguro de hogar.',
    image: '/icons/hogar.svg',
    icon: '/icons/hogar.svg',
  },
  {
    slug: 'auto',
    title: 'Auto',
    shortDescription: 'Cobertura para tu vehículo y para ti en el camino, con asistencia cuando la necesites.',
    description: 'Descripción completa del seguro de auto.',
    image: '/icons/auto.svg',
    icon: '/icons/auto.svg',
  },
  {
    slug: 'gastos-medicos',
    title: 'Gastos Médicos',
    shortDescription: 'Atención médica de calidad sin que los costos te preocupen ante una enfermedad o un accidente.',
    description: 'Descripción completa de gastos médicos.',
    image: '/icons/gastos-medicos.svg',
    icon: '/icons/gastos-medicos.svg',
  },
  {
    slug: 'mascotas',
    title: 'Mascotas',
    shortDescription: 'Cuida la salud de tu compañero con apoyo en consultas, emergencias y tratamientos.',
    description: 'Descripción completa del seguro de mascotas.',
    image: '/icons/mascotas.svg',
    icon: '/icons/mascotas.svg',
  },
]