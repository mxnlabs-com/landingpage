// components/sections/About.tsx
import { about } from '@/data/about'

export default function About() {
  return (
    <section id="nosotros" className="about">
      <h2>{about.title}</h2>

      <div className="about-body">
        {/* Imagen de equipo */}
        <div className="about-image" aria-hidden="true" />

        <div className="about-text">
          {about.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  )
}