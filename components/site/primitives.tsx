import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const WHATSAPP_NUMBER = '593990293318'
export const WHATSAPP_INITIAL_MESSAGE =
  '¡Hola! Me encantó Me encantó este conjunto me gustaría recibir asesoría para armar un outfit / buscar ropa para una ocasión especial. ¿Me podrían ayudar?'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_INITIAL_MESSAGE,
)}`
export const CONTACT_EMAIL = 'taller@planb-alma.com'


export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </div>
  )
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-primary/70 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-[11px]',
        className,
      )}
    >
      {children}
    </span>
  )
}

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  withArrow?: boolean
  className?: string
  external?: boolean
}

export function ButtonLink({
  href,
  children,
  variant = 'solid',
  withArrow = false,
  className,
  external = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex h-11 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        variant === 'solid' &&
          'bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-[#dcc298] hover:shadow-[0_10px_30px_-10px_rgba(207,178,131,0.6)]',
        variant === 'outline' &&
          'border border-primary text-primary hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground',
        className,
      )}
    >
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  )
}
