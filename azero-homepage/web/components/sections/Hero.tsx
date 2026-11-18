// src/components/sections/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'
import Icon, { type IconName } from '@/components/ui/Icon'

//iconos de acceso version movil
const quickLinks: { label: string; href: string; icon: IconName }[] = [
  { label: 'Vida', href: '/#servicios', icon: 'heart' },
  { label: 'Hogar', href: '/#servicios', icon: 'home' },
  { label: 'Auto', href: '/#servicios', icon: 'car' },
  { label: 'Médicos', href: '/#servicios', icon: 'medical' },
  { label: 'Mascotas', href: '/#servicios', icon: 'paw' },
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image
          src="/images/hero-desktop (1).jpg"
          alt="Madre e hija sonriendo y abrazándose"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" aria-hidden="true" />
      </div>

      <div className="hero-top">
        <ul className="hero-quick" aria-label="Tipos de seguro">
          {quickLinks.map(({ label, href, icon }) => (
            <li key={label}>
              <Link href={href}>
                <span className="hero-quick-icon">
                  <Icon name={icon} size={22} />
                </span>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hero-content">
          <h1 id="hero-title">Asegura tu futuro</h1>
          <p>
            Cuidar lo que más te importa es nuestra filosofía. Proteger a tu
            familia, nuestro&nbsp;compromiso.
          </p>
          <Link href="/#servicios" className="hero-button hero-button--desktop">
            Servicios
          </Link>
        </div>
      </div>      
    </section>
  )
}