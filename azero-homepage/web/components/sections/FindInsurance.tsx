// src/components/sections/FindInsurance.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function FindInsurance() {
  return (
    <section className="find">
      <div className="find-text">
        <h2>Encuentra el seguro para ti</h2>
        <p>
          Cuidarte no debería ser un estrésor. Cotiza tu póliza de seguro de
          manera inmediata.
        </p>
        <Link href="/#servicios" className="find-button">
          Conocer Servicios
        </Link>
      </div>

      <div className="find-image">
        <Image
          src="/images/imagenCarroFamilia.png"
          alt="Familia junto a un auto"
          fill
          sizes="(max-width: 700px) 100vw, 40vw"
        />
      </div>
    </section>
  )
}