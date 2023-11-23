const mongoose = require("mongoose");

const ticketBookingSchema = new mongoose.Schema({
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trips",
    required: true,
  },
  passengerName: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  dropoffLocation: {
    type: String,
    required: true,
  },

  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
});

const TicketBooking = mongoose.model("TicketBooking", ticketBookingSchema);

module.exports = TicketBooking;
