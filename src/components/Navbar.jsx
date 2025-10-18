import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Corporate Cab System</h1>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-200">Dashboard</a>
        <a href="#" className="hover:text-gray-200">Book Cab</a>
        <a href="#" className="hover:text-gray-200">Bookings</a>
        <a href="#" className="hover:text-gray-200">Logout</a>
      </div>
    </nav>
  );
}
