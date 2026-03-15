/**
 * @file ReviewsSection.tsx
 * @description Customer review cards section.
 */

import type { FC } from 'react'
import { Star } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'
import { useStudioStore } from '../hooks/useStudioStore'

/**
 * @description Renders a list of client reviews and testimonials.
 */
export const ReviewsSection: FC = () => {
  const reviews = useStudioStore((state) => state.reviews)

  /**
   * @description Renders 1–5 star icons based on rating.
   */
  const renderStars = (count: number) =>
    Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={14}
        className={
          index < count ? 'fill-[#E11D48] text-[#E11D48]' : 'text-zinc-600'
        }
      />
    ))

  return (
    <section
      id="reviews"
      className="bg-[#0B0B0B] py-16 text-[#F5F5F5] sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          title="Client Reviews"
          subtitle="Real words from real clients who trusted us with their first piece, full sleeves and everything in between."
        />

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col gap-3 rounded-2xl border border-zinc-700/80 bg-[#151515]/90 p-5 text-sm text-zinc-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#F5F5F5]">
                  {review.name}
                </h3>
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-xs text-zinc-300">{review.comment}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}