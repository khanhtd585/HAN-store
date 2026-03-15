/**
 * @file HeroSection.tsx
 * @description Fullscreen hero section with dramatic imagery and CTAs.
 */

import type { FC } from 'react'
import { useScrollToSection } from '../hooks/useScrollToSection'

/**
 * @description Hero section introducing HAN's Tattoo &amp; Piercing.
 */
export const HeroSection: FC = () => {
  const scrollToSection = useScrollToSection()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0B0B] text-[#F5F5F5]"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://pub-cdn.sider.ai/u/U0R7H1JJ56Y/web-coder/69b6821ced87165b0377a34d/resource/53a0f15d-c95f-42d5-ae34-4109af2166bd.jpg"
          alt="Tattoo artist working in a dark studio"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/90 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0B0B0B] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-28 sm:px-6 md:flex-row md:items-end md:gap-16 md:pt-32">
        <div className="max-w-xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-300">
            Ho Chi Minh City · Vietnam
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-[0.22em] text-[#F5F5F5] sm:text-5xl md:text-6xl">
            HAN&apos;S
            <br />
            Tattoo &amp; Piercing
          </h1>
          <p className="text-base text-zinc-200 sm:text-lg">
            Custom tattoo studio specialising in{' '}
            <span className="font-semibold text-[#F5F5F5]">Blackwork</span>,
            <span className="font-semibold text-[#F5F5F5]"> Minimal Line</span> and
            <span className="font-semibold text-[#F5F5F5]"> Street Style</span> tattoos
            crafted to print your story on skin.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection('booking')}
              className="inline-flex items-center justify-center rounded-full bg-[#E11D48] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#F5F5F5] shadow-[0_0_30px_rgba(225,29,72,0.6)] transition hover:bg-[#fb284f]"
            >
              Book Appointment
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('gallery')}
              className="inline-flex items-center justify-center rounded-full border border-zinc-600/80 bg-black/40 px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#F5F5F5] transition hover:border-[#E11D48] hover:bg-[#151515]"
            >
              View Gallery
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-1 justify-end md:mt-0">
          <div className="relative h-64 w-48 overflow-hidden rounded-3xl border border-zinc-700/80 bg-[#151515]/80 shadow-[0_0_45px_rgba(0,0,0,0.9)] sm:h-72 sm:w-56 lg:h-80 lg:w-64">
            <img
              src="https://pub-cdn.sider.ai/u/U0R7H1JJ56Y/web-coder/69b6821ced87165b0377a34d/resource/ffccbd2c-0d56-4156-8d00-d0d5ee622f64.jpg"
              alt="Closeup of blackwork tattoo"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-zinc-400">
                Print Your Story
              </p>
              <p className="mt-1 text-xs text-zinc-200">
                Private studio · Hygienic setup · Custom-only work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}