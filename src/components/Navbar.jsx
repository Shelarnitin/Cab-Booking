import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Corporate Cab System</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        <Link to="/book" className="hover:text-gray-200">Book Cab</Link>
        <Link to="/bookings" className="hover:text-gray-200">Bookings</Link>
        <Link to="/drivers" className="hover:text-gray-200">Drivers</Link>
        <Link to="/" className="hover:text-gray-200">Logout</Link>
      </div>
    </nav>
  );
}
