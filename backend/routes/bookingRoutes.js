import express from "express";
import { createBooking, getBookings } from "../controllers/bookingController.js";
import Booking from "../models/bookingModel.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings);

//  Delete a booking by ID
router.delete("/:id", async (req, res) => {
  try {
    console.log("🗑️ Deleting booking with ID:", req.params.id);
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) {
      console.log("❌ Booking not found");
      return res.status(404).json({ message: "Booking not found" });
    }

    console.log("✅ Booking deleted successfully:", deleted);
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("🔥 Error deleting booking:", error.message);
    res.status(500).json({ message: error.message });
  }
});

export default router;
