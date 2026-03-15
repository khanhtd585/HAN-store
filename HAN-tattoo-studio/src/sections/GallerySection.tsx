/**
 * @file GallerySection.tsx
 * @description Tattoo gallery with filters, hover effects, and modal preview.
 */

import type { FC } from 'react'
import { useState } from 'react'
import { X } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'
import { useStudioStore } from '../hooks/useStudioStore'
import type { TattooStyle, GalleryImage } from '../types/gallery'

/**
 * @description Filterable tattoo gallery grid with click-to-zoom modal.
 */
export const GallerySection: FC = () => {
  const [activeFilter, setActiveFilter] = useState<TattooStyle | 'All'>('All')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const filterGalleryByStyle = useStudioStore((state) => state.filterGalleryByStyle)

  const images = filterGalleryByStyle(activeFilter)

  const filters: (TattooStyle | 'All')[] = ['All', 'Blackwork', 'Minimal', 'Street']

  return (
    <section
      id="gallery"
      className="bg-[#050505] py-16 text-[#F5F5F5] sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            title="Tattoo Gallery"
            subtitle="A curated glimpse into our Blackwork, Minimal Line and Street Style pieces. Every tattoo starts with a story."
          />
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 transition ${
                  activeFilter === filter
                    ? 'border-[#E11D48] bg-[#E11D48] text-[#F5F5F5] shadow-[0_0_15px_rgba(225,29,72,0.6)]'
                    : 'border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:border-zinc-500'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {images.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/70"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100" />
              <span className="absolute bottom-2 left-2 rounded-full bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-200">
                {image.style}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <button
            type="button"
            className="absolute right-4 top-4 text-zinc-300 hover:text-[#F5F5F5]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <div className="max-h-[90vh] max-w-3xl overflow-hidden rounded-3xl border border-zinc-700 bg-[#050505]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-full object-contain"
            />
            <div className="flex items-center justify-between px-4 py-3 text-xs text-zinc-300">
              <span className="uppercase tracking-[0.2em]">
                {selectedImage.style} Ink
              </span>
              <span>HAN&apos;S Tattoo &amp; Piercing · HCMC</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}