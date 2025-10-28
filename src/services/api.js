import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend base URL
});

// Create new booking
export const createBooking = (data) => API.post("/bookings", data);

// Fetch all bookings
export const getBookings = () => API.get("/bookings");

// Delete Bookings
export const deleteBooking = (id) => API.delete(`/bookings/${id}`);

// Drivers API
export const getDrivers = () => API.get("/drivers");
export const addDriver = (data) => API.post("/drivers", data);

