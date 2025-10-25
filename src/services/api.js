import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

export const createBooking = (data) => API.post("/bookings", data);
export const getBookings = () => API.get("/bookings");
