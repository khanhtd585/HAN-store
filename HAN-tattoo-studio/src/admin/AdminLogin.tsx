/**
 * @file AdminLogin.tsx
 * @description Admin login form for accessing the dashboard.
 */

import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Lock } from 'lucide-react'
import { useAdminAuth } from '../hooks/useAdminAuth'

/**
 * @description Form values for admin login.
 */
interface AdminLoginForm {
  /** Admin email. */
  email: string
  /** Admin password. */
  password: string
}

/**
 * @description Dark-themed login card for admin access.
 */
export const AdminLogin: FC = () => {
  const { login, error } = useAdminAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginForm>({
    defaultValues: {
      email: 'admin@kans-tattoo.com',
      password: '',
    },
  })

  /**
   * @description Handles admin login form submission with a small delay for UX.
   */
  const onSubmit = async (values: AdminLoginForm) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    login(values.email, values.password)
  }

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-zinc-800 bg-[#050505] p-6 text-[#F5F5F5] shadow-[0_0_40px_rgba(0,0,0,0.9)]">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
          <Lock size={16} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Admin Access
          </p>
          <p className="text-sm text-zinc-200">HAN&apos;S Tattoo Dashboard</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 text-xs"
      >
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Email
          </label>
          <input
            type="email"
            {...register('email', { required: 'Email is required.' })}
            className="mt-1 w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-xs text-[#F5F5F5] outline-none focus:border-[#E11D48]"
          />
          {errors.email && (
            <p className="mt-1 text-[11px] text-rose-400">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Password
          </label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required.',
            })}
            className="mt-1 w-full rounded-md border border-zinc-700 bg-black/60 px-3 py-2 text-xs text-[#F5F5F5] outline-none focus:border-[#E11D48]"
          />
          {errors.password && (
            <p className="mt-1 text-[11px] text-rose-400">
              {errors.password.message}
            </p>
          )}
        </div>

        {error && (
          <p className="text-[11px] text-rose-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#E11D48] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5F5F5] hover:bg-[#fb284f] disabled:cursor-not-allowed disabled:bg-zinc-700"
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
