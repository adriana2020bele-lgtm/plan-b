import { Container, Eyebrow } from './primitives'

const VALUES = [
  {
    n: '01',
    title: 'Prendas con Alma Propia',
    text: 'Tratamientos manuales sin químicos nocivos, preservando la textura genuina de la fibra natural.',
  },
  {
    n: '02',
    title: 'Inspiración en la Naturaleza',
    text: 'Patrones y costuras fluidas inspiradas en ramificaciones, cortezas y corrientes botánicas.',
  },
  {
    n: '03',
    title: 'Verdadera Libertad',
    text: 'Siluetas cómodas y elegantes, pensadas para que te sientas tú misma en cada momento.',
  },
]

export function Philosophy() {
  return (
    <section
      id="prendas"
      aria-labelledby="valores-title"
      className="scroll-mt-20 py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col justify-between gap-12 rounded-2xl border border-border bg-card p-8 sm:p-10 lg:min-h-[500px]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                La filosofía
              </p>
              <p className="mt-4 font-serif text-2xl leading-snug text-foreground sm:text-[28px]">
                Prendas hechas con calma, pensadas para durar y acompañarte.
              </p>
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Cada corte de nuestras prendas orgánicas es un pacto con el tiempo. No producimos en
              masa; esculpimos piezas con identidad única que se adaptan a tu camino y maduran con
              nobleza.
            </p>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="size-8 rounded-full bg-primary" />
              <span className="text-xs text-foreground/85">PlaN B · Alta Costura Orgánica</span>
            </div>
          </div>

          <div>
            <Eyebrow>Valores orgánicos</Eyebrow>
            <h2
              id="valores-title"
              className="mt-5 font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl lg:text-[44px]"
            >
              ¿Por qué elegir un camino diferente?
            </h2>
            <ol className="mt-10">
              {VALUES.map((v) => (
                <li
                  key={v.n}
                  className="flex gap-6 border-b border-border py-7 first:pt-0 sm:gap-8"
                >
                  <span className="w-11 shrink-0 font-serif text-3xl leading-none text-primary tabular-nums">{v.n}</span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground sm:text-xl">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
