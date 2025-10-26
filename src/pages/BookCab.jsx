import React, { useState } from "react";
import { createBooking } from "../services/api";

export default function BookCab() {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    driver: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBooking(formData);
      setMessage("✅ Cab booked successfully!");
      setFormData({ pickup: "", drop: "", driver: "", date: "" });
    } catch (error) {
      console.error("Booking failed:", error);
      setMessage("❌ Failed to book cab. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Book a Corporate Cab
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-600">Pickup Location</label>
            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-600">Drop Location</label>
            <input
              type="text"
              name="drop"
              value={formData.drop}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-600">Driver Name</label>
            <input
              type="text"
              name="driver"
              value={formData.driver}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-600">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-semibold ${
              message.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
