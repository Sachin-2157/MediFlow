import { Routes, Route } from 'react-router-dom'
import PublicLayout from '@/layouts/PublicLayout'
import AdminPanel from '@/pages/AdminPanel'
import BookAppointment from '@/pages/BookAppointment'
import Dashboard from '@/pages/Dashboard'
import Home from '@/pages/Home'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};

