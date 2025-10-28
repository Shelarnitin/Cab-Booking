import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import BookCab from './pages/BookCab';
import Bookings from './pages/Bookings';
import Drivers from './pages/Drivers';
import ProtectedRoute from './components/ProtectedRoute';
import ViewDrivers from "./pages/ViewDrivers";
import AddDriver from "./pages/AddDriver";



export default function App() {
  return (
    <Routes>
      {/* public route (no navbar) */}
      <Route path="/" element={<Login />} />

      {/* protected/app routes that share navbar */}
      <Route path="/" element={<Layout />}>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="book"
          element={
            <ProtectedRoute>
              <BookCab />
            </ProtectedRoute>
          }
        />
        <Route
          path="bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="drivers"
          element={
            <ProtectedRoute>
              <Drivers />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="add-driver"
        element={
          <ProtectedRoute>
            <AddDriver />
          </ProtectedRoute>
        }
      />
      <Route
      path="viewdrivers"
      element={
        <ProtectedRoute>
          <ViewDrivers />
        </ProtectedRoute>
      }
    />


      {/* fallback route */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
