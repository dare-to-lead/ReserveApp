const TicketBooking = require("../models/ticketBookingModel");
const Trips = require("../models/tripsModel");

exports.bookTicket = async (req, res) => {
  try {
    const { trip, passengerName, seatNumber, contactNumber, email } = req.body;

    // Populate the trip details (date, startTime, endTime) from the referenced Trips document
    const populatedTrip = await Trips.findById(trip).exec();

    const newTicketBooking = new TicketBooking({
      trip,
      passengerName,
      seatNumber,
      contactNumber,
      email,
      pickupLocation: populatedTrip.from,
      dropoffLocation: populatedTrip.to,

      startTime: populatedTrip.startTime,
      endTime: populatedTrip.endTime,
    });

    const savedTicketBooking = await newTicketBooking.save();

    res.status(201).json(savedTicketBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
