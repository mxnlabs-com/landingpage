// components/sections/Faq.tsx
import { faq } from '@/data/faq'
import Image from 'next/image'


export default function Faq() {
  return (
    <section id="faq" className="faq">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faq.map(({ id, question, answer }) => (
          <details key={id} className="faq-item" open={id === ''}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <Image 
            src="/images/puntitos.svg"
            alt=""
            width={600}
            height={600}
            className="faq-dots"
            aria-hidden="true"
          />
    </section>
  )
}