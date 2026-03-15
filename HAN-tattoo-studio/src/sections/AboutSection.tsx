/**
 * @file AboutSection.tsx
 * @description About the studio section with text and supporting imagery.
 */

import type { FC } from 'react'
import { SectionHeader } from '../components/common/SectionHeader'

/**
 * @description Describes HAN's Tattoo &amp; Piercing and its philosophy.
 */
export const AboutSection: FC = () => {
  return (
    <section
      id="about"
      className="bg-[#0B0B0B] py-16 text-[#F5F5F5] sm:py-20 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-center md:gap-16">
        <div className="flex-1 space-y-6">
          <SectionHeader
            title="About the Studio"
            subtitle={
              <span>
                HAN&apos;s Tattoo &amp; Piercing is a modern, appointment-focused studio
                in Ho Chi Minh City. We blend street energy with minimal design to
                create tattoos that feel timeless on skin.
              </span>
            }
          />
          <p className="text-sm text-zinc-300 sm:text-base">
            From bold blackwork to ultra-clean minimal line work, every piece starts
            with a conversation. We listen, sketch, refine and only then commit ink
            to skin. Your story leads. The lines follow.
          </p>
          <p className="text-sm text-zinc-300 sm:text-base">
            The studio is fully equipped with professional-grade tools, single-use
            needles and strict hygiene standards. Sessions are by booking only to
            keep the space focused, calm and fully dedicated to you.
          </p>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto h-64 max-w-sm overflow-hidden rounded-3xl border border-zinc-700 bg-[#151515] shadow-[0_0_40px_rgba(0,0,0,0.85)] sm:h-80">
            <img
              src="https://pub-cdn.sider.ai/u/U0R7H1JJ56Y/web-coder/69b6821ced87165b0377a34d/resource/7b9ca198-33df-4d97-a925-51398937cf6c.jpg"
              alt="Tattoo chair inside a dark studio"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Private Room · Clean Lines
              </p>
              <p className="mt-1 text-xs text-zinc-200">
                Designed for focus, comfort and sharp detail work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}