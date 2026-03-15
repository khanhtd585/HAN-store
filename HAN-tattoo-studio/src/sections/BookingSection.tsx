/**
 * @file BookingSection.tsx
 * @description Booking form for tattoo appointments.
 */

import type { FC } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SectionHeader } from '../components/common/SectionHeader'
import { useStudioStore } from '../hooks/useStudioStore'

/**
 * @description Form values used for booking requests.
 */
interface BookingFormValues {
  /** Customer full name. */
  name: string
  /** Customer phone number. */
  phone: string
  /** Customer email address. */
  email: string
  /** Description of tattoo idea. */
  tattooIdea: string
  /** Preferred tattoo size. */
  size: string
  /** Placement on body. */
  placement: string
  /** Optional reference image file list from input. */
  referenceImage?: FileList
  /** Preferred date string. */
  date: string
  /** Preferred time string. */
  time: string
}

/**
 * @description Booking form section with validation and success state.
 */
export const BookingSection: FC = () => {
  const addBooking = useStudioStore((state) => state.addBooking)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    defaultValues: {
      size: 'Small',
      placement: 'Arm',
    },
  })

  /**
   * @description Handles booking form submission, stores booking in Zustand and shows feedback.
   */
  const onSubmit = async (values: BookingFormValues) => {
    setSuccessMessage(null)
    const file = values.referenceImage?.[0]
    const referenceImage = file ? URL.createObjectURL(file) : undefined

    addBooking({
      name: values.name,
      phone: values.phone,
      email: values.email,
      tattooIdea: values.tattooIdea,
      size: values.size,
      placement: values.placement,
      referenceImage,
      date: values.date,
      time: values.time,
    })

    await new Promise((resolve) => setTimeout(resolve, 600))

    setSuccessMessage('Your request has been sent. We will contact you shortly.')
    reset({ size: 'Small', placement: 'Arm' })
  }

  return (
    <section
      id="booking"
      className="bg-[#050505] py-16 text-[#F5F5F5] sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          title="Book Your Session"
          subtitle="Tell us what you have in mind and we&apos;ll get back with available slots, rough pricing and preparation tips."
        />

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[1.2fr,0.8fr]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 rounded-2xl border border-zinc-700/80 bg-[#151515]/90 p-5 sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required.' })}
                  className="mt-2 w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-[#F5F5F5] outline-none ring-[#E11D48]/60 focus:border-[#E11D48] focus:ring-1"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-[#E11D48]">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone is required.' })}
                  className="mt-2 w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-[#F5F5F5] outline-none ring-[#E11D48]/60 focus:border-[#E11D48] focus:ring-1"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-[#E11D48]">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required.' })}
                  className="mt-2 w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-[#F5F5F5] outline-none ring-[#E11D48]/60 focus:border-[#E11D48] focus:ring-1"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-[#E11D48]">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                  Tattoo Size
                </label>
                <select
                  {...register('size', { required: 'Size is required.' })}
                  className="mt-2 w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-[#F5F5F5] outline-none ring-[#E11D48]/60 focus:border-[#E11D48] focus:ring-1"
                >
                  <option value="Mini">Mini</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="Full Sleeve">Full Sleeve</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                  Placement
                </label>
                <select
                  {...register('placement', { required: 'Placement is required.' })}
                  className="mt-2 w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-[#F5F5F5] outline-none ring-[#E11D48]/60 focus:border-[#E11D48] focus:ring-1"
                >
                  <option value="Arm">Arm</option>
                  <option value="Leg">Leg</option>
                  <option value="Chest">Chest</option>
                  <option value="Back">Back</option>
                  <option value="Neck">Neck</option>
                  <option value="Rib">Rib</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                  Reference Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register('referenceImage')}
                  className="mt-2 block w-full text-[11px] text-zinc-300 file:mr-3 file:rounded-md file:border-0 file:bg-zinc-800 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:uppercase file:tracking-[0.18em] file:text-zinc-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                Tattoo Idea
              </label>
              <textarea
                rows={4}
                {...register('tattooIdea', {
                  required: 'Please describe your tattoo idea.',
                })}
                className="mt-2 w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-[#F5F5F5] outline-none ring-[#E11D48]/60 focus:border-[#E11D48] focus:ring-1"
                placeholder="Tell us about your idea, style references, and any text or symbols."
              />
              {errors.tattooIdea && (
                <p className="mt-1 text-xs text-[#E11D48]">
                  {errors.tattooIdea.message}
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                  Preferred Date
                </label>
                <input
                  type="date"
                  {...register('date', { required: 'Date is required.' })}
                  className="mt-2 w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-[#F5F5F5] outline-none ring-[#E11D48]/60 focus:border-[#E11D48] focus:ring-1"
                />
                {errors.date && (
                  <p className="mt-1 text-xs text-[#E11D48]">
                    {errors.date.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
                  Preferred Time
                </label>
                <input
                  type="time"
                  {...register('time', { required: 'Time is required.' })}
                  className="mt-2 w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-[#F5F5F5] outline-none ring-[#E11D48]/60 focus:border-[#E11D48] focus:ring-1"
                />
                {errors.time && (
                  <p className="mt-1 text-xs text-[#E11D48]">
                    {errors.time.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#E11D48] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#F5F5F5] shadow-[0_0_30px_rgba(225,29,72,0.6)] transition hover:bg-[#fb284f] disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:shadow-none"
            >
              {isSubmitting ? 'Sending...' : 'Book Appointment'}
            </button>

            {successMessage && (
              <p className="text-center text-xs text-emerald-400">
                {successMessage}
              </p>
            )}
          </form>

          <aside className="space-y-4 rounded-2xl border border-zinc-700/80 bg-[#151515]/90 p-5 text-sm text-zinc-200 sm:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
              Before You Book
            </h3>
            <ul className="list-disc space-y-2 pl-4 text-xs text-zinc-300">
              <li>18+ only. Bring a valid ID to your session.</li>
              <li>
                Deposits may be required for large projects and are non-refundable.
              </li>
              <li>Arrive well-rested and avoid alcohol 24 hours before.</li>
              <li>
                We will confirm your date and send preparation instructions by phone
                or email.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}