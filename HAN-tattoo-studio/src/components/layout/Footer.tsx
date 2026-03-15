/**
 * @file Footer.tsx
 * @description Dark minimal footer with studio info and social links.
 */

import type { FC } from 'react'
import { Facebook, Instagram, Phone, Mail } from 'lucide-react'

/**
 * @description Minimal dark footer for HAN&apos;S Tattoo &amp; Piercing.
 */
export const Footer: FC = () => {
  return (
    <footer
      id="contact"
      className="border-t border-zinc-800 bg-[#050505] py-10 text-[#F5F5F5]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold uppercase tracking-[0.2em]">
            HAN&apos;S Tattoo &amp; Piercing
          </h3>
          <p className="text-sm text-zinc-400">Ho Chi Minh City, Vietnam</p>
          <div className="flex flex-col gap-1 text-sm text-zinc-300">
            <span className="inline-flex items-center gap-2">
              <Phone size={14} /> +84 90 000 0000
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={14} /> contact@kans-tattoo.com
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Follow the ink
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-200 transition hover:border-[#E11D48] hover:text-[#E11D48]"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-200 transition hover:border-[#E11D48] hover:text-[#E11D48]"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 text-xs font-semibold text-zinc-200 transition hover:border-[#E11D48] hover:text-[#E11D48]"
            >
              ZL
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-[11px] uppercase tracking-[0.25em] text-zinc-600">
        © {new Date().getFullYear()} HAN&apos;S Tattoo &amp; Piercing · Print
        Your Story
      </p>
    </footer>
  )
}
