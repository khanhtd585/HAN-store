/**
 * @file AdminPage.tsx
 * @description Top-level admin page that switches between login and dashboard.
 */

import type { FC } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { useAdminAuth } from '../hooks/useAdminAuth'
import { AdminLogin } from './AdminLogin'
import { AdminDashboard } from './AdminDashboard'

/**
 * @description Entry component for the admin route.
 */
const AdminPage: FC = () => {
  const { isAuthenticated } = useAdminAuth()

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5]">
      <Navbar hideNavLinks />
      <main className="flex items-center justify-center pt-16 sm:pt-20">
        {isAuthenticated ? <AdminDashboard /> : <AdminLogin />}
      </main>
    </div>
  )
}

export default AdminPage
