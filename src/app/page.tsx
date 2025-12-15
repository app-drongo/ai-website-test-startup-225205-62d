import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Reviews from '@/components/sections/home/Reviews'

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