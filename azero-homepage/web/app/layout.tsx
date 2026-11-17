// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopBar from '@/components/sections/TopBar'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Seguros Azero',
  description: 'Asegura tu futuro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}