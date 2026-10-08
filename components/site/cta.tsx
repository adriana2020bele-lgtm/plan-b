import {
  ButtonLink,
  CONTACT_EMAIL,
  Container,
  Eyebrow,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from './primitives'

export function Cta() {
  return (
    <section
      id="contacto"
      aria-labelledby="cta-title"
      className="scroll-mt-20 border-y border-border bg-surface py-20 sm:py-24 lg:py-28"
    >
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Adquiere tu look</Eyebrow>
        <h2
          id="cta-title"
          className="mt-6 font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl"
        >
          Viste con verdadera libertad hoy
        </h2>
        <p className="mt-5 max-w-[720px] text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Nuestras piezas son de edición limitada. Conversa directamente con nuestro taller por
          WhatsApp para consultar disponibilidad de tallas, envíos internacionales y asesoría
          personalizada.
        </p>
        <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
          <ButtonLink href={WHATSAPP_URL} external withArrow>
            Consultar por WhatsApp
          </ButtonLink>
          <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="outline">
            Escríbenos Directo
          </ButtonLink>
        </div>
        <p className="mt-8 text-xs text-primary/80">
          Atención personalizada inmediata · Envíos garantizados
        </p>
      </Container>
    </section>
  )
}
