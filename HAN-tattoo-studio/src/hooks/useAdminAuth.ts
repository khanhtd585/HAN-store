/**
 * @file useAdminAuth.ts
 * @description Simple Zustand-powered admin authentication state.
 */

import { create } from 'zustand'

/**
 * @description Shape of the admin authentication store.
 */
interface AdminAuthState {
  /** Whether the admin is logged in. */
  isAuthenticated: boolean
  /** Last login error message, if any. */
  error: string | null
  /** Attempts login with the given credentials and returns success status. */
  login: (email: string, password: string) => boolean
  /** Logs the admin out and clears errors. */
  logout: () => void
}

/**
 * @description Hard-coded admin credential values.
 */
const ADMIN_EMAIL = 'admin@kans-tattoo.com'
const ADMIN_PASSWORD = 'kanstattoo'

/**
 * @description Hook to access and manipulate admin authentication state.
 */
export const useAdminAuth = create<AdminAuthState>((set) => ({
  isAuthenticated: false,
  error: null,
  login: (email, password) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      set({ isAuthenticated: true, error: null })
      return true
    }
    set({ error: 'Invalid email or password.' })
    return false
  },
  logout: () => set({ isAuthenticated: false, error: null }),
}))
