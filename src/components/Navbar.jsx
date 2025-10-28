import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Corporate Cab System</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        <Link to="/book" className="hover:text-gray-200">Book Cab</Link>
        <Link to="/bookings" className="hover:text-gray-200">Bookings</Link>
        <Link to="/viewdrivers" className="hover:text-gray-200">viewdrivers</Link>
        <Link to="/add-driver" className="hover:text-gray-200">adddriver</Link>
        <button
          onClick={handleLogout}
          className="hover:text-gray-200 border border-white px-2 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
