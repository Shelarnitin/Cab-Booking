import React, { useEffect, useState } from "react";
import { getDrivers } from "../services/api";

const ViewDrivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await getDrivers();
        setDrivers(res.data);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    };
    fetchDrivers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Driver List</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">License No</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Vehicle Type</th>
              <th className="py-2 px-4 border">Vehicle Number</th>
            </tr>
          </thead>
          <tbody>
            {drivers.length > 0 ? (
              drivers.map((driver) => (
                <tr key={driver._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border">{driver.name}</td>
                  <td className="py-2 px-4 border">{driver.licenseNumber}</td>
                  <td className="py-2 px-4 border">{driver.phone}</td>
                  <td className="py-2 px-4 border">{driver.vehicleType}</td>
                  <td className="py-2 px-4 border">{driver.vehicleNumber}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No drivers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewDrivers;
