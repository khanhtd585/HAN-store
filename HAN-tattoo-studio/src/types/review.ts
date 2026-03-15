/**
 * @file review.ts
 * @description Interfaces for customer reviews and testimonials.
 */

/**
 * @description Represents a single customer review.
 */
export interface Review {
  /** Unique identifier for the review. */
  id: string
  /** Customer name or alias. */
  name: string
  /** Star rating from 1 to 5. */
  rating: number
  /** Short testimonial text. */
  comment: string
  /** Optional created date string. */
  createdAt?: string
}