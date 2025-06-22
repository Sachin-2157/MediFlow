// src/components/layout/Navbar.jsx
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Brand */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-tight hover:text-blue-600"
        >
          MediFlow
        </NavLink>

        {/* Navigation Links */}
        <nav className="space-x-6">
          {[
            { name: 'Home', to: '/' },
            { name: 'Book Appointment', to: '/book' },
            { name: 'Doctor Panel', to: '/doctor' },
            { name: 'Admin Panel', to: '/admin' },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  isActive
                    ? 'text-blue-600 underline'
                    : 'text-gray-700'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
);
}
