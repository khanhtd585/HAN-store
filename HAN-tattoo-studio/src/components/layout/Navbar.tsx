/**
 * @file Navbar.tsx
 * @description Sticky navigation bar for the main website with brand and section anchors.
 */

import type { FC } from 'react'
import { useScrollToSection } from '../../hooks/useScrollToSection'

/**
 * @description Props for the Navbar component.
 */
interface NavbarProps {
  /**
   * Optional flag to hide primary navigation links (e.g., on admin pages).
   */
  hideNavLinks?: boolean
}

/**
 * @description Sticky top navigation with brand logo, links, and primary CTA.
 */
export const Navbar: FC<NavbarProps> = ({ hideNavLinks }) => {
  const scrollToSection = useScrollToSection()

  /**
   * @description Creates a click handler that scrolls smoothly to a section by ID.
   */
  const handleNavClick = (id: string) => () => scrollToSection(id)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-800 bg-[#0B0B0B]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        {/* Brand */}
        <button
          type="button"
          onClick={handleNavClick('home')}
          className="flex items-center gap-2 text-left"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-xs font-semibold tracking-[0.16em] text-[#F5F5F5]">
            K
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
              HAN&apos;S
            </span>
            <span className="text-sm font-medium text-[#F5F5F5]">
              Tattoo &amp; Piercing
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        {!hideNavLinks && (
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-zinc-300 md:flex">
            <button
              type="button"
              onClick={handleNavClick('gallery')}
              className="transition hover:text-[#F5F5F5]"
            >
              Gallery
            </button>
            <button
              type="button"
              onClick={handleNavClick('pricing')}
              className="transition hover:text-[#F5F5F5]"
            >
              Pricing
            </button>
            <button
              type="button"
              onClick={handleNavClick('reviews')}
              className="transition hover:text-[#F5F5F5]"
            >
              Reviews
            </button>
            <button
              type="button"
              onClick={handleNavClick('booking')}
              className="transition hover:text-[#F5F5F5]"
            >
              Booking
            </button>
            <button
              type="button"
              onClick={handleNavClick('contact')}
              className="transition hover:text-[#F5F5F5]"
            >
              Contact
            </button>
          </nav>
        )}

        {/* Main CTA */}
        {!hideNavLinks && (
          <button
            type="button"
            onClick={handleNavClick('booking')}
            className="rounded-full bg-[#E11D48] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5] shadow-[0_0_25px_rgba(225,29,72,0.45)] transition hover:bg-[#fb284f]"
          >
            Book Now
          </button>
        )}
      </div>
    </header>
  )
}
