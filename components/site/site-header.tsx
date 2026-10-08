'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { ButtonLink, Container, WHATSAPP_URL } from './primitives'

const NAV_LINKS = [
  { href: '#coleccion', label: 'Colección' },
  { href: '#manifiesto', label: 'Manifiesto' },
  { href: '#prendas', label: 'Prendas' },
  { href: '#contacto', label: 'Contacto' },
]

export function Logo() {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="PlaN B, inicio">
      <Image
        src="/images/logo.png"
        alt=""
        width={44}
        height={44}
        className="size-10 rounded-full sm:size-11"
      />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-medium text-foreground sm:text-xl">PlaN B</span>
        <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.3em] text-primary sm:text-[9px]">
          Ropa con alma
        </span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between sm:h-[84px]">
        <Logo />

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href={WHATSAPP_URL}
            external
            withArrow
            className="hidden h-10 px-6 sm:inline-flex"
          >
            WhatsApp
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Móvil" className="border-t border-border md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-foreground/85 transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href={WHATSAPP_URL} external withArrow className="mt-3 w-full">
              WhatsApp
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  )
}
