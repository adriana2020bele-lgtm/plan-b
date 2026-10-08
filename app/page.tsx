import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { Manifesto } from '@/components/site/manifesto'
import { Collection } from '@/components/site/collection'
import { Philosophy } from '@/components/site/philosophy'
import { Cta } from '@/components/site/cta'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Manifesto />
        <Collection />
        <Philosophy />
        <Cta />
      </main>
      <SiteFooter />
    </>
  )
}
