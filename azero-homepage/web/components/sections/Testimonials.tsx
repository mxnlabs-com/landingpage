// src/components/sections/Testimonials.tsx
import { CircleUserRound } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>

      <div className="testimonials-grid">
        {testimonials.map(({ id, quote, name, role }) => (
          <figure key={id} className="testimonial-card">
            <blockquote>{quote}</blockquote>
            <figcaption>
              <CircleUserRound
                size={40}
                strokeWidth={1.25}
                aria-hidden="true"
                className="testimonial-avatar"
              />
              <div>
                <strong>{name}</strong>
                <span>{role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}