import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  pickup: { type: String, required: true },
  drop: { type: String, required: true },
  driver: { type: String, required: true },
  date: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
