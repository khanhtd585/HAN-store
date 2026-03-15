/**
 * @file AdminDashboard.tsx
 * @description Dark admin dashboard for managing bookings, gallery, and reviews.
 */

import type { FC } from 'react'
import { useState } from 'react'
import { CalendarDays, Image, MessageSquare, LogOut } from 'lucide-react'
import { useAdminAuth } from '../hooks/useAdminAuth'
import { BookingList } from './components/BookingList'
import { GalleryManager } from './components/GalleryManager'
import { ReviewManager } from './components/ReviewManager'

/**
 * @description Available admin dashboard tab keys.
 */
type AdminTab = 'bookings' | 'gallery' | 'reviews'

/**
 * @description Main admin dashboard content with tabbed sections.
 */
export const AdminDashboard: FC = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>('bookings')
  const { logout } = useAdminAuth()

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 text-[#F5F5F5] sm:px-6">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
            HAN&apos;S Dashboard
          </p>
          <p className="text-sm text-zinc-200">
            Manage bookings, gallery and client reviews.
          </p>
        </div>
        <button
          type="button"
          onClick={logout}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-black/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-200 hover:border-[#E11D48]"
        >
          <LogOut size={14} /> Logout
        </button>
      </header>

      <nav className="mb-6 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
        <button
          type="button"
          onClick={() => setActiveTab('bookings')}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${
            activeTab === 'bookings'
              ? 'bg-[#E11D48] text-[#F5F5F5]'
              : 'bg-[#151515] text-zinc-300 hover:bg-[#181818]'
          }`}
        >
          <CalendarDays size={14} /> Bookings
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('gallery')}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${
            activeTab === 'gallery'
              ? 'bg-[#E11D48] text-[#F5F5F5]'
              : 'bg-[#151515] text-zinc-300 hover:bg-[#181818]'
          }`}
        >
          <Image size={14} /> Gallery
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('reviews')}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${
            activeTab === 'reviews'
              ? 'bg-[#E11D48] text-[#F5F5F5]'
              : 'bg-[#151515] text-zinc-300 hover:bg-[#181818]'
          }`}
        >
          <MessageSquare size={14} /> Reviews
        </button>
      </nav>

      <section className="space-y-4">
        {activeTab === 'bookings' && (
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">
              Booking Requests
            </h2>
            <BookingList />
          </div>
        )}
        {activeTab === 'gallery' && (
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">
              Gallery Management
            </h2>
            <GalleryManager />
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">
              Review Management
            </h2>
            <ReviewManager />
          </div>
        )}
      </section>
    </div>
  )
}
