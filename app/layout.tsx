import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Figtree, Gelasio } from 'next/font/google'
import './globals.css'

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })
const gelasio = Gelasio({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-gelasio',
})

export const metadata: Metadata = {
  title: 'PlaN B · Ropa con Alma | Alta Costura Orgánica',
  description:
    'PlaN B crea prendas orgánicas con alma propia, hechas con calma y cuidado, inspiradas en la naturaleza.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0b0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${figtree.variable} ${gelasio.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
