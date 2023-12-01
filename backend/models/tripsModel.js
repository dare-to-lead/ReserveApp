const mongoose = require("mongoose");

const tripsSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
    required: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
    required: true,
  },
  busDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusDetails",
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
  seatBooked: {
    type: [String],
    required: true,
  },
  busFare: {
    type: Number,
    required: true,
  },
  busOperator: {
    type: String,
  },
  category: {
    type: String,
  },
  totalSeats: {
    type: Number,
  },
  amenities: {
    type: [String],
  },
  rating: {
    type: Number,
  },
});

const Trips = mongoose.model("Trips", tripsSchema);

module.exports = Trips;
