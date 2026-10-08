import Image from 'next/image'
import { Container, Eyebrow } from './primitives'

const LOOKS = [
  {
    id: '01',
    name: 'Gala Indigo',
    price: '$320',
    image: '/images/look-01.png',
    alt: 'Vestido de gala asimétrico de mezclilla índigo con mangas de tul',
    description:
      'Vestido de gala asimétrico con corsetería rígida artesanal y mangas dramáticas de tul etéreo.',
  },
  {
    id: '02',
    name: 'Escultura Botánica',
    price: '$295',
    image: '/images/look-02.png',
    alt: 'Vestido sirena de mezclilla con bordados botánicos en el corpiño',
    description:
      'Vestido de cuello alto y talle sirena con bordados orgánicos tridimensionales que emulan raíces silvestres.',
  },
  {
    id: '03',
    name: 'Saco Estructurado',
    price: '$340',
    image: '/images/look-03.png',
    alt: 'Traje sastre de mezclilla con costuras blancas topográficas',
    description:
      'Traje sastre con costuras blancas sinuosas que dibujan líneas topográficas hipnóticas sobre el cuerpo.',
  },
]

export function Collection() {
  return (
    <section
      id="coleccion"
      aria-labelledby="coleccion-title"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Otoño / Invierno 24</Eyebrow>
            <h2
              id="coleccion-title"
              className="mt-5 font-serif text-4xl leading-tight text-foreground sm:text-5xl"
            >
              La Trinidad de Prendas
            </h2>
          </div>
          <p className="max-w-[400px] text-sm leading-relaxed text-muted-foreground lg:pb-2">
              Tres piezas diseñadas con materiales orgánicos de alta calidad, pensadas para
              acompañarte con elegancia y comodidad.
          </p>
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-14 lg:grid-cols-3">
          {LOOKS.map((look) => (
            <li key={look.id} className="group">
              <article>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
                  <Image
                    src={look.image}
                    alt={look.alt}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg uppercase tracking-wide text-foreground lg:text-xl">
                    {`Look ${look.id} · ${look.name}`}
                  </h3>
                  <span className="shrink-0 text-sm font-semibold text-primary">{look.price}</span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {look.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
