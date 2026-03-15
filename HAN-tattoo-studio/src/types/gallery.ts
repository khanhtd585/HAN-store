/**
 * @file gallery.ts
 * @description Interfaces for tattoo gallery images.
 */

/**
 * @description Tattoo style categories for gallery filtering.
 */
export type TattooStyle = 'Blackwork' | 'Minimal' | 'Street'

/**
 * @description Represents a single gallery image item.
 */
export interface GalleryImage {
  /** Unique identifier for the image. */
  id: string
  /** Source URL of the image. */
  src: string
  /** Accessible description for the image. */
  alt: string
  /** Tattoo style category used for filtering. */
  style: TattooStyle
  /** Optional timestamp string when the image was added. */
  createdAt?: string
}