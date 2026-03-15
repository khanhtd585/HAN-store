/**
 * @file ReviewManager.tsx
 * @description Admin interface for managing customer reviews.
 */

import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Trash2, Star } from 'lucide-react'
import { useStudioStore } from '../../hooks/useStudioStore'

/**
 * @description Form values for creating a new review.
 */
interface ReviewFormValues {
  /** Customer name. */
  name: string
  /** Star rating 1-5 as string. */
  rating: string
  /** Review comment. */
  comment: string
}

/**
 * @description Admin component to add and remove reviews.
 */
export const ReviewManager: FC = () => {
  const reviews = useStudioStore((state) => state.reviews)
  const addReview = useStudioStore((state) => state.addReview)
  const removeReview = useStudioStore((state) => state.removeReview)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    defaultValues: {
      rating: '5',
    },
  })

  /**
   * @description Handles submission of the review creation form.
   */
  const onSubmit = (values: ReviewFormValues) => {
    addReview({
      name: values.name,
      rating: Number(values.rating),
      comment: values.comment,
      createdAt: new Date().toISOString(),
    })
    reset({ name: '', rating: values.rating, comment: '' })
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 rounded-2xl border border-zinc-700/80 bg-[#151515]/90 p-4 text-xs text-zinc-200 sm:text-sm"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
          Add Review
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              Name
            </label>
            <input
              type="text"
              {...register('name', { required: 'Name is required.' })}
              className="mt-1 w-full rounded-md border border-zinc-700 bg-black/60 px-2 py-1.5 text-xs text-[#F5F5F5] outline-none focus:border-[#E11D48]"
            />
            {errors.name && (
              <p className="mt-1 text-[11px] text-rose-400">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              Rating
            </label>
            <select
              {...register('rating', { required: 'Rating is required.' })}
              className="mt-1 w-full rounded-md border border-zinc-700 bg-black/60 px-2 py-1.5 text-xs text-[#F5F5F5] outline-none focus:border-[#E11D48]"
            >
              <option value="5">★★★★★</option>
              <option value="4">★★★★☆</option>
              <option value="3">★★★☆☆</option>
              <option value="2">★★☆☆☆</option>
              <option value="1">★☆☆☆☆</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400">
            Comment
          </label>
          <textarea
            rows={3}
            {...register('comment', { required: 'Comment is required.' })}
            className="mt-1 w-full rounded-md border border-zinc-700 bg-black/60 px-2 py-1.5 text-xs text-[#F5F5F5] outline-none focus:border-[#E11D48]"
          />
          {errors.comment && (
            <p className="mt-1 text-[11px] text-rose-400">
              {errors.comment.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#E11D48] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5F5F5] hover:bg-[#fb284f]"
        >
          Add Review
        </button>
      </form>

      <div className="grid gap-3 sm:grid-cols-2">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="flex flex-col gap-2 rounded-2xl border border-zinc-700/80 bg-[#151515]/90 p-4 text-xs text-zinc-200 sm:text-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#F5F5F5]">
                {review.name}
              </h3>
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={12}
                    className={
                      index < review.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-zinc-600'
                    }
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-300">{review.comment}</p>
            <button
              type="button"
              onClick={() => removeReview(review.id)}
              className="mt-2 inline-flex items-center gap-1 text-[11px] text-rose-400 hover:text-rose-300"
            >
              <Trash2 size={14} /> Delete
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}
