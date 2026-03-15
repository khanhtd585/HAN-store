/**
 * @file PricingSection.tsx
 * @description Price list cards for different tattoo sizes.
 */

import type { FC } from 'react'
import { SectionHeader } from '../components/common/SectionHeader'

/**
 * @description Represents a single pricing option card.
 */
interface PricingItem {
  /** Label of the pricing tier. */
  label: string
  /** Short description or range of pricing. */
  price: string
  /** Additional note like conditions or details. */
  note?: string
}

/**
 * @description Static list of tattoo pricing tiers.
 */
const pricing: PricingItem[] = [
  {
    label: 'Mini Tattoo',
    price: 'From 500,000 VND',
    note: 'Single line symbols, tiny icons, minimal detail.',
  },
  {
    label: 'Small Tattoo',
    price: '1,000,000 – 2,000,000 VND',
    note: 'Delicate pieces with light shading or small compositions.',
  },
  {
    label: 'Medium Tattoo',
    price: '2,000,000 – 5,000,000 VND',
    note: 'Forearm pieces, medium compositions or bold blackwork.',
  },
  {
    label: 'Large Tattoo',
    price: 'Custom pricing',
    note: 'Back, chest or thigh pieces priced after consultation.',
  },
  {
    label: 'Full Sleeve',
    price: 'Consultation required',
    note: 'Multi-session projects planned together with the artist.',
  },
]

/**
 * @description Displays pricing tiers in animated cards.
 */
export const PricingSection: FC = () => {
  return (
    <section
      id="pricing"
      className="bg-[#050505] py-16 text-[#F5F5F5] sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          title="Pricing"
          subtitle="Every tattoo is custom, but these ranges help you plan your project. Final price depends on size, detail and placement."
        />

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map((tier) => (
            <div
              key={tier.label}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-700/80 bg-[#151515]/90 p-5 text-sm text-zinc-200 shadow-[0_0_25px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:border-[#E11D48] hover:shadow-[0_0_35px_rgba(225,29,72,0.45)]"
            >
              <div className="space-y-3">
                <h3 className="text-base font-semibold uppercase tracking-[0.18em] text-[#F5F5F5]">
                  {tier.label}
                </h3>
                <p className="text-sm font-medium text-[#E11D48]">
                  {tier.price}
                </p>
                {tier.note && (
                  <p className="text-xs text-zinc-300">{tier.note}</p>
                )}
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                Clean lines · Safe ink · Street-ready
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}