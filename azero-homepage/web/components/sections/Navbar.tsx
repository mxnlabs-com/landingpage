'use client'

// src/components/layout/Navbar.tsx
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/data/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    const mq = window.matchMedia('(min-width: 701px)')
    const onChange = () => mq.matches && close()
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [])

  return (
    <header className="navbar">
      <Link
        href="/"
        className="navbar-logo"
        aria-label="Azero, inicio"
        onClick={close}
      >
        <Image
          src="/images/azero-logo.png"
          alt=""
          width={40}
          height={40}
          priority
        />
      </Link>

      <button
        type="button"
        className="navbar-toggle"
        aria-expanded={open}
        aria-controls="menu-principal"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="menu-principal"
        className="navbar-menu"
        data-open={open}
        aria-label="Principal"
      >
        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} onClick={close}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#contacto" className="navbar-button" onClick={close}>
          Contáctanos
        </Link>
      </nav>
    </header>
  )
}