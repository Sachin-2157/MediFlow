// src/pages/AdminPanel.jsx
import { useEffect, useState } from "react";
// import {  updateBookingStatus } from "@/services/api";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function AdminPanel() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchAllBookings().then((res) => setBookings(res.data));
  }, []);

  const handleStatus = (id, status) => {
    updateBookingStatus(id, { status }).then(() => {
      setBookings((bks) =>
        bks.map((b) => (b.id === id ? { ...b, status } : b))
      );
    });
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">Manage Bookings</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((b) => (
            <TableRow key={b.id}>
              <TableCell>{b.patientName}</TableCell>
              <TableCell>{b.doctorName}</TableCell>
              <TableCell>{new Date(b.date).toLocaleString()}</TableCell>
              <TableCell>{b.status}</TableCell>
              <TableCell className="space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleStatus(b.id, "approved")}
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleStatus(b.id, "cancelled")}
                >
                  Cancel
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
