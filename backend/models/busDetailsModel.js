const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  totalWindowSeatsAvailable: {
    type: Number,
  },
  rating: {
    type: Number,
    required: true,
  },
  animeties: {
    type: [String],
    required: true,
  },
});

const BusDetails = mongoose.model("BusDetails", busSchema);

module.exports = BusDetails;
