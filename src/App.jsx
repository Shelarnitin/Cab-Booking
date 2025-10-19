import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import BookCab from './pages/BookCab';
import Bookings from './pages/Bookings';
import Drivers from './pages/Drivers';

export default function App() {
  return (
    <Routes>
      {/* public route (no navbar) */}
      <Route path="/" element={<Login />} />

      {/* protected/app routes that share navbar */}
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="book" element={<BookCab />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="drivers" element={<Drivers />} />
      </Route>

      {/* fallback: redirect unknown paths to login */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
