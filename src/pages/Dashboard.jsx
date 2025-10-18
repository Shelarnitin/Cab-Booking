import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Welcome to the Corporate Cab Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Book a Ride</h3>
            <p className="text-gray-600 mb-3">
              Schedule a new cab for your employee or client with just a few clicks.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Book Now
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-green-600">My Bookings</h3>
            <p className="text-gray-600 mb-3">
              Check the list of your previous and upcoming rides.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              View Bookings
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-orange-600">Drivers</h3>
            <p className="text-gray-600 mb-3">
              View available drivers and their assigned trips.
            </p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
              Manage Drivers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
