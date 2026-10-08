import Image from 'next/image'
import { CONTACT_EMAIL, Container, WHATSAPP_NUMBER, WHATSAPP_URL } from './primitives'

const COLUMNS = [
  {
    title: 'Colección',
    links: ['Gala Indigo', 'Escultura Botánica', 'Saco Topográfico', 'Línea Orgánica'],
    href: '#coleccion',
  },
  {
    title: 'Filosofía',
    links: ['Manifiesto', 'Proceso Orgánico', 'Taller Sustentable', 'Cuidado de Prendas'],
    href: '#manifiesto',
  },
]

export function SiteFooter() {
  return (
    <footer className="pt-16 pb-8 sm:pt-20">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_0.9fr_1fr] lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="" width={44} height={44} className="size-11 rounded-full" />
              <span className="font-serif text-xl text-foreground">PlaN B</span>
            </div>
            <p className="mt-5 max-w-[380px] text-xs leading-relaxed text-muted-foreground">
              Ropa con alma, hecha con calma y cuidado. Prendas orgánicas con
              alma propia inspiradas en la naturaleza.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                {col.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={col.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
              Contacto
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-xs">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {`WhatsApp: ${WHATSAPP_NUMBER}`}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  {`Email: ${CONTACT_EMAIL}`}
                </a>
              </li>
              <li className="text-muted-foreground/80">Montevideo, Uruguay. Envíos globales.</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 PlaN B · Ropa con Alma. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Políticas de Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Términos de Servicio
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
