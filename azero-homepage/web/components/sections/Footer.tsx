// components/sections/Footer.tsx
import Image from 'next/image'
import Link from 'next/link'
import { footerColumns, socialLinks } from '@/data/footer'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link href="/" aria-label="Azero, inicio">
          <Image src="/images/azero-logo-footer.png" alt="Azero" width={200} height={100} />
        </Link>

        <ul className="footer-social">
          {socialLinks.map(({ label, href, icon }) => (
            <li key={label}>
              <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Image src={icon} alt="" width={20} height={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {footerColumns.map(({ title, links }) => (
        <nav key={title} className="footer-column" aria-label={title}>
          <h3>{title}</h3>
          <ul>
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </footer>
  )
}