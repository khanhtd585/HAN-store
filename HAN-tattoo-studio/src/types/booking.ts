/**
 * @file booking.ts
 * @description TypeScript interfaces and types for tattoo booking data.
 */

/**
 * @description Status values for a booking request.
 */
export type BookingStatus = 'pending' | 'accepted' | 'rejected'

/**
 * @description Represents a customer booking request for a tattoo session.
 */
export interface Booking {
  /** Unique identifier for the booking. */
  id: string
  /** Customer full name. */
  name: string
  /** Customer phone number. */
  phone: string
  /** Customer email address. */
  email: string
  /** Customer description of tattoo idea. */
  tattooIdea: string
  /** Approximate tattoo size (e.g., Mini, Small, Medium, Large). */
  size: string
  /** Placement on the body (e.g., arm, leg, chest, back). */
  placement: string
  /** Optional reference image URL (preview or uploaded reference). */
  referenceImage?: string
  /** Preferred appointment date (ISO string or human readable). */
  date: string
  /** Preferred appointment time (string such as "14:00"). */
  time: string
  /** Current status of the booking. */
  status: BookingStatus
}