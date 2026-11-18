// src/components/sections/Services.tsx
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section id="servicios" className="services">
      <h2>Conoce nuestros servicios</h2>

      <div className="services-grid">
        {services.map(({ slug, title, shortDescription, icon }) => (
          <Link
            key={slug}
            href={`/servicios/${slug}`}
            className="service-card"
          >
            <Image src={icon} alt="" width={24} height={24} />
            <h3>{title}</h3>
            <p>{shortDescription}</p>
            <span className="service-cta">Cotizar ahora</span>
          </Link>
        ))}
      </div>
    </section>
  )
}