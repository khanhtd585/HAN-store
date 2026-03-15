/**
 * @file Home.tsx
 * @description Main landing page composing all public sections.
 */

import type { FC } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { HeroSection } from '../sections/HeroSection'
import { AboutSection } from '../sections/AboutSection'
import { GallerySection } from '../sections/GallerySection'
import { ProcessSection } from '../sections/ProcessSection'
import { PricingSection } from '../sections/PricingSection'
import { ReviewsSection } from '../sections/ReviewsSection'
import { BookingSection } from '../sections/BookingSection'

/**
 * @description Landing page for HAN's Tattoo & Piercing website.
 */
const Home: FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5]">
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ProcessSection />
        <PricingSection />
        <ReviewsSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
