import React, { useEffect, useState } from "react";
import { getBookings } from "../services/api";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getBookings();
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) {
    return <p className="text-center mt-8 text-gray-600">Loading bookings...</p>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Cab Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Pickup</th>
                <th className="py-3 px-4 text-left">Drop</th>
                <th className="py-3 px-4 text-left">Driver</th>
                <th className="py-3 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4">{booking.pickup}</td>
                  <td className="py-3 px-4">{booking.drop}</td>
                  <td className="py-3 px-4">{booking.driver}</td>
                  <td className="py-3 px-4">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
