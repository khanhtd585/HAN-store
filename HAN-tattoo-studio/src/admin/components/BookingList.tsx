/**
 * @file BookingList.tsx
 * @description Admin view for managing booking requests.
 */

import type { FC } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'
import { useStudioStore } from '../../hooks/useStudioStore'
import type { BookingStatus } from '../../types/booking'

/**
 * @description Renders a list of bookings with status controls.
 */
export const BookingList: FC = () => {
  const bookings = useStudioStore((state) => state.bookings)
  const updateBookingStatus = useStudioStore(
    (state) => state.updateBookingStatus,
  )

  /**
   * @description Updates the status of a booking.
   */
  const handleStatusChange = (id: string, status: BookingStatus) => {
    updateBookingStatus(id, status)
  }

  if (bookings.length === 0) {
    return (
      <p className="text-sm text-zinc-400">No booking requests yet.</p>
    )
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <article
          key={booking.id}
          className="rounded-2xl border border-zinc-700/80 bg-[#151515]/90 p-4 text-xs text-zinc-200 sm:text-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-semibold text-[#F5F5F5]">{booking.name}</p>
              <p className="text-xs text-zinc-400">
                {booking.phone} · {booking.email}
              </p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                booking.status === 'pending'
                  ? 'bg-amber-500/10 text-amber-400'
                  : booking.status === 'accepted'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-rose-500/10 text-rose-400'
              }`}
            >
              {booking.status}
            </span>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <p>
              <span className="text-zinc-400">Size:</span> {booking.size}
            </p>
            <p>
              <span className="text-zinc-400">Placement:</span>{' '}
              {booking.placement}
            </p>
            <p>
              <span className="text-zinc-400">Date:</span> {booking.date}
            </p>
            <p>
              <span className="text-zinc-400">Time:</span> {booking.time}
            </p>
          </div>

          <p className="mt-2 text-xs text-zinc-300">{booking.tattooIdea}</p>

          {booking.referenceImage && (
            <div className="mt-3">
              <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                Reference
              </p>
              <img
                src={booking.referenceImage}
                alt="Tattoo reference"
                className="h-32 w-full max-w-xs rounded-md border border-zinc-700 object-cover"
              />
            </div>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleStatusChange(booking.id, 'accepted')}
              className="inline-flex items-center gap-1 rounded-full bg-emerald-600/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5F5F5] hover:bg-emerald-500"
            >
              <CheckCircle2 size={14} /> Accept
            </button>
            <button
              type="button"
              onClick={() => handleStatusChange(booking.id, 'rejected')}
              className="inline-flex items-center gap-1 rounded-full bg-rose-600/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5F5F5] hover:bg-rose-500"
            >
              <XCircle size={14} /> Reject
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}
