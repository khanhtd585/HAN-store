/**
 * @file useStudioStore.ts
 * @description Central Zustand store for gallery, bookings, and reviews.
 */

import { create } from 'zustand'
import type { Booking, BookingStatus } from '../types/booking'
import type { GalleryImage, TattooStyle } from '../types/gallery'
import type { Review } from '../types/review'

/**
 * @description Shape of the global studio store.
 */
interface StudioState {
  gallery: GalleryImage[]
  bookings: Booking[]
  reviews: Review[]
  addBooking: (booking: Omit<Booking, 'id' | 'status'>) => Booking
  updateBookingStatus: (id: string, status: BookingStatus) => void
  addGalleryImage: (image: Omit<GalleryImage, 'id'>) => void
  removeGalleryImage: (id: string) => void
  addReview: (review: Omit<Review, 'id'>) => void
  removeReview: (id: string) => void
  filterGalleryByStyle: (style: TattooStyle | 'All') => GalleryImage[]
}

/**
 * @description Creates and returns the central Zustand store for studio data.
 */
export const useStudioStore = create<StudioState>((set, get) => ({
  gallery: [
    {
      id: 'g1',
      src: 'https://pub-cdn.sider.ai/u/U0R7H1JJ56Y/web-coder/69b6821ced87165b0377a34d/resource/3140a252-ff19-4196-b1a5-493d5f283994.jpg',
      alt: 'Bold blackwork tattoo on forearm',
      style: 'Blackwork',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'g2',
      src: 'https://pub-cdn.sider.ai/u/U0R7H1JJ56Y/web-coder/69b6821ced87165b0377a34d/resource/b1db74fc-0bb7-49df-b4d6-2be682c18999.jpg',
      alt: 'Minimal line tattoo on wrist',
      style: 'Minimal',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'g3',
      src: 'https://pub-cdn.sider.ai/u/U0R7H1JJ56Y/web-coder/69b6821ced87165b0377a34d/resource/bf694814-6350-4ebc-b211-c47b851ce680.jpg',
      alt: 'Street style tattoo with graffiti elements',
      style: 'Street',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'g4',
      src: 'https://pub-cdn.sider.ai/u/U0R7H1JJ56Y/web-coder/69b6821ced87165b0377a34d/resource/58be6d7e-cc51-49b8-8ccd-9142e62fd864.jpg',
      alt: 'Large blackwork tattoo on back',
      style: 'Blackwork',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'g5',
      src: 'https://pub-cdn.sider.ai/u/U0R7H1JJ56Y/web-coder/69b6821ced87165b0377a34d/resource/772ea777-0a59-4a24-846e-9253c70fc8c7.jpg',
      alt: 'Minimal geometric tattoo',
      style: 'Minimal',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'g6',
      src: 'https://pub-cdn.sider.ai/u/U0R7H1JJ56Y/web-coder/69b6821ced87165b0377a34d/resource/f8dab5c1-0f33-43f7-b642-c82dab3c182c.jpg',
      alt: 'Street inspired graffiti tattoo',
      style: 'Street',
      createdAt: new Date().toISOString(),
    },
  ],
  bookings: [],
  reviews: [
    {
      id: 'r1',
      name: 'Minh Nguyen',
      rating: 5,
      comment:
        'Amazing artist and super clean studio. My blackwork sleeve turned out better than I imagined.',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'r2',
      name: 'Lan Pham',
      rating: 5,
      comment:
        'Minimal line tattoo is so delicate and precise. The team really walked me through every step.',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'r3',
      name: 'Khoa Tran',
      rating: 4,
      comment:
        'Great street style design and very professional vibe. Highly recommended in HCMC.',
      createdAt: new Date().toISOString(),
    },
  ],
  addBooking: (bookingData) => {
    const newBooking: Booking = {
      id: `b-${Date.now()}`,
      status: 'pending',
      ...bookingData,
    }
    set((state) => ({ bookings: [newBooking, ...state.bookings] }))
    return newBooking
  },
  updateBookingStatus: (id, status) => {
    set((state) => ({
      bookings: state.bookings.map((b) =>
        b.id === id
          ? {
              ...b,
              status,
            }
          : b,
      ),
    }))
  },
  addGalleryImage: (image) => {
    const newImage: GalleryImage = {
      id: `g-${Date.now()}`,
      ...image,
    }
    set((state) => ({ gallery: [newImage, ...state.gallery] }))
  },
  removeGalleryImage: (id) => {
    set((state) => ({
      gallery: state.gallery.filter((img) => img.id !== id),
    }))
  },
  addReview: (review) => {
    const newReview: Review = {
      id: `r-${Date.now()}`,
      ...review,
    }
    set((state) => ({ reviews: [newReview, ...state.reviews] }))
  },
  removeReview: (id) => {
    set((state) => ({
      reviews: state.reviews.filter((r) => r.id !== id),
    }))
  },
  filterGalleryByStyle: (style) => {
    const { gallery } = get()
    if (style === 'All') return gallery
    return gallery.filter((img) => img.style === style)
  },
}))