/**
 * @file App.tsx
 * @description Application root with routing for public site and admin panel.
 */

import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import AdminPage from './admin/AdminPage'

/**
 * @description Root component configuring main routes using HashRouter.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </HashRouter>
  )
}
