import { Outlet, NavLink } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

export default function DoctorLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-6">Doctor Panel</h2>
        <nav className="space-y-3">
          <NavLink to="/doctor" end className="block hover:text-blue-600">
            Dashboard
          </NavLink>
          <NavLink to="appointments" className="block hover:text-blue-600">
            Appointments
          </NavLink>
          {/* add more links as needed */}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <header className="flex justify-end p-4 border-b">
          <UserButton />
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
