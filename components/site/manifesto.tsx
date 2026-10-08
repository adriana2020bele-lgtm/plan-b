import { Container, Eyebrow } from './primitives'

export function Manifesto() {
  return (
    <section
      id="manifiesto"
      aria-labelledby="manifiesto-title"
      className="scroll-mt-20 py-20 sm:py-28 lg:py-36"
    >
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Manifiesto de libertad</Eyebrow>
        <h2 id="manifiesto-title" className="sr-only">
          Manifiesto de libertad
        </h2>
        <blockquote className="mt-8 max-w-[1000px] font-serif text-2xl leading-[1.5] text-pretty text-foreground sm:text-3xl lg:text-[38px]">
          {
            '"Plan B nace de la naturaleza y del oficio. Cada prenda se diseña con calma, se confecciona a mano con materiales orgánicos y guarda un alma propia: piezas únicas y atemporales, creadas para acompañarte y contar tu historia."'
          }
        </blockquote>
        <p className="mt-10 max-w-[760px] text-[15px] leading-relaxed text-primary sm:text-lg">
          Frescura, autenticidad y carácter en cada detalle, para que vistas con la libertad de ser
          tú misma.
        </p>
      </Container>
    </section>
  )
}
