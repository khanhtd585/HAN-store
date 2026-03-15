/**
 * @file GalleryManager.tsx
 * @description Admin interface for managing gallery images.
 */

import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Trash2 } from 'lucide-react'
import { useStudioStore } from '../../hooks/useStudioStore'
import type { TattooStyle } from '../../types/gallery'

/**
 * @description Form values for adding a gallery image.
 */
interface GalleryFormValues {
  /** Image URL. */
  src: string
  /** Image description. */
  alt: string
  /** Tattoo style category. */
  style: TattooStyle
}

/**
 * @description Admin component to add and remove gallery images.
 */
export const GalleryManager: FC = () => {
  const gallery = useStudioStore((state) => state.gallery)
  const addGalleryImage = useStudioStore((state) => state.addGalleryImage)
  const removeGalleryImage = useStudioStore(
    (state) => state.removeGalleryImage,
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GalleryFormValues>({
    defaultValues: {
      style: 'Blackwork',
    },
  })

  /**
   * @description Handles form submission to add a new gallery image.
   */
  const onSubmit = (values: GalleryFormValues) => {
    addGalleryImage({
      src: values.src,
      alt: values.alt,
      style: values.style,
      createdAt: new Date().toISOString(),
    })
    reset({ src: '', alt: '', style: values.style })
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 rounded-2xl border border-zinc-700/80 bg-[#151515]/90 p-4 text-xs text-zinc-200 sm:text-sm"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
          Add Image
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              Image URL
            </label>
            <input
              type="url"
              {...register('src', { required: 'URL is required.' })}
              className="mt-1 w-full rounded-md border border-zinc-700 bg-black/60 px-2 py-1.5 text-xs text-[#F5F5F5] outline-none focus:border-[#E11D48]"
            />
            {errors.src && (
              <p className="mt-1 text-[11px] text-rose-400">
                {errors.src.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              Alt Text
            </label>
            <input
              type="text"
              {...register('alt', { required: 'Description is required.' })}
              className="mt-1 w-full rounded-md border border-zinc-700 bg-black/60 px-2 py-1.5 text-xs text-[#F5F5F5] outline-none focus:border-[#E11D48]"
            />
            {errors.alt && (
              <p className="mt-1 text-[11px] text-rose-400">
                {errors.alt.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-[1fr,auto]">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              Style
            </label>
            <select
              {...register('style', { required: 'Style is required.' })}
              className="mt-1 w-full rounded-md border border-zinc-700 bg-black/60 px-2 py-1.5 text-xs text-[#F5F5F5] outline-none focus:border-[#E11D48]"
            >
              <option value="Blackwork">Blackwork</option>
              <option value="Minimal">Minimal Line</option>
              <option value="Street">Street Style</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#E11D48] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5F5F5] hover:bg-[#fb284f]"
          >
            Add
          </button>
        </div>
      </form>

      <div className="grid gap-3 sm:grid-cols-3">
        {gallery.map((img) => (
          <div
            key={img.id}
            className="group overflow-hidden rounded-xl border border-zinc-700/80 bg-[#151515]/90"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-32 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="flex items-center justify-between px-3 py-2 text-[11px] text-zinc-200">
              <span className="truncate">{img.style}</span>
              <button
                type="button"
                onClick={() => removeGalleryImage(img.id)}
                className="text-rose-400 hover:text-rose-300"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
