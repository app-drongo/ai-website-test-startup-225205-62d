import type { Metadata } from 'next'

import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Reviews from '@/components/sections/home/Reviews'

export const metadata: Metadata = {
  title: 'Test Startup',
  description: 'Welcome to Home',
}

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
    </>
  )
}
