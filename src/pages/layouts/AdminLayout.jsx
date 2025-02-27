import React from 'react'
import { CompanySidebar, Header, Copyright } from '../../components'

const AdminLayout = () => {
  return (
    <div>
          {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <CompanySidebar />
      </aside>

      <div className="flex-1">
      {/* Header */}
      <Header /> {/* Renders Header component */}

      <Outlet /> {/* Renders nested routes like StudentDashboard, Applications, etc. */}

      <div className="border-t-2 border-[var(--dark-border-color)] py-4 text-center text-sm text-[var(--gray-text-color)]">
          <Copyright />
      </div>
      </div>
    </div>
  )
}

export default AdminLayout