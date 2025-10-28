import React, { useState } from "react";
import { addDriver } from "../services/api";
import { useNavigate } from "react-router-dom";

const AddDriver = () => {
  const navigate = useNavigate();
  const [driver, setDriver] = useState({
    name: "",
    licenseNumber: "",
    phone: "",
    vehicleType: "",
    vehicleNumber: "",
  });

  const handleChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDriver(driver);
      alert("✅ Driver added successfully!");
      navigate("/viewdrivers"); // redirect to ViewDrivers page after saving
    } catch (error) {
      console.error("Error adding driver:", error);
      alert("❌ Failed to add driver");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Add New Driver
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Driver Name"
          value={driver.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="text"
          name="licenseNumber"
          placeholder="License Number"
          value={driver.licenseNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={driver.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="text"
          name="vehicleType"
          placeholder="Vehicle Type"
          value={driver.vehicleType}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={driver.vehicleNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Driver
        </button>
      </form>
    </div>
  );
};

export default AddDriver;
