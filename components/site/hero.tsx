import Image from 'next/image'
import { ButtonLink, Container, Eyebrow } from './primitives'

const PILLARS = ['Estilo auténtico', 'Prendas con alma propia', 'Inspiración natural']
const VIDEO_SRC = '/Untitled_A_woman_walks_forward_in_a_garden_holding_a_book_4bpEAhMN.mp4'
const FALLBACK_IMAGE = '/images/hero.png'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[640px] flex-col justify-between overflow-hidden border-b border-border sm:min-h-[700px] lg:min-h-[760px]"
    >
      {/* Capa de video con imagen alternativa de respaldo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Imagen alternativa visible de fondo en caso de carga o si el video no puede reproducirse */}
        <Image
          src={FALLBACK_IMAGE}
          alt="Alta costura orgánica Plan B"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Video del banner principal con reproducción automática, en bucle, sin sonido y playsinline para móviles */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={FALLBACK_IMAGE}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          {/* Elemento de imagen de respaldo nativo si el navegador no soporta video */}
          <img
            src={FALLBACK_IMAGE}
            alt="Alta costura orgánica Plan B"
            className="h-full w-full object-cover object-center"
          />
        </video>

        {/* Ajuste de contraste y superposición para que los textos en español y los botones se lean con total claridad */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 max-md:bg-background/80"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/25"
        />
      </div>

      {/* Contenido principal del banner */}
      <Container className="relative z-10 flex flex-1 flex-col justify-center py-16 sm:py-20 lg:py-24">
        <div className="max-w-[680px]">
          <Eyebrow className="border-primary/80 bg-background/60 backdrop-blur-sm">
            Alta costura orgánica
          </Eyebrow>
          <h1
            id="hero-title"
            className="mt-6 font-serif text-[44px] leading-[1.05] font-normal text-balance text-foreground drop-shadow-sm sm:text-6xl lg:text-[70px]"
          >
            Vístete sin <br className="hidden sm:block" />
            Reglas
          </h1>
          <p className="mt-7 max-w-[540px] text-[15px] leading-relaxed text-foreground/85 drop-shadow-sm sm:text-base lg:text-lg">
            Plan B crea prendas orgánicas con alma propia, hechas con calma y cuidado. Una forma
            de vestir auténtica, cómoda e inspirada en la naturaleza.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="#coleccion" withArrow className="shadow-lg shadow-black/30">
              Colección 2024
            </ButtonLink>
            <ButtonLink
              href="#manifiesto"
              variant="outline"
              className="bg-background/40 backdrop-blur-md hover:bg-primary"
            >
              Saber Más
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* Barra de pilares en la parte inferior del banner */}
      <div className="relative z-10 border-t border-border/80 bg-background/50 backdrop-blur-md">
        <Container>
          <ul className="flex flex-col gap-3 py-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            {PILLARS.map((pillar) => (
              <li key={pillar} className="transition-colors hover:text-foreground">
                {`[ ${pillar} ]`}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  )
}

