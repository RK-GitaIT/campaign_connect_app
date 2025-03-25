'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { logout } = useAuth()

  const isActive = (path: string) => pathname === path

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Campaign Connect</h1>
        </div>
        <nav className="mt-4">
          <Link 
            href="/dashboard"
            className={`block px-4 py-2 ${
              isActive('/dashboard') 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Dashboard
          </Link>
          <Link 
            href="/dashboard/calls"
            className={`block px-4 py-2 ${
              isActive('/dashboard/calls')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Calls
          </Link>
          <Link 
            href="/dashboard/campaigns"
            className={`block px-4 py-2 ${
              isActive('/dashboard/campaigns')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Campaigns
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button
            onClick={logout}
            className="w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
} 