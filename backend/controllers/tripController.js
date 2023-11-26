// tripsController.js
const BusDetails = require("../models/busDetailsModel");
const Trips = require("../models/tripsModel");

// const parsedStartTime = Date.parse(new Date(2023, 11, 3, 22, 30, 0, 0));
// console.log(parsedStartTime);

//create or post a trip
exports.createTrip = async (req, res) => {
  try {
    const { from, to, busDetails, startTime, endTime, seatBooked, busFare } =
      req.body;

    const newTrip = new Trips({
      from,
      to,
      busDetails,
      startTime,
      endTime,
      seatBooked,
      busFare,
    });

    const savedTrip = await newTrip.save();

    res.status(201).json(savedTrip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get all trips

exports.getTrips = async (req, res) => {
  try {
    const busDetail = await BusDetails.find();

    let query = { ...req.query };

    // Removing some fields for category
    const removeFields = ["page", "limit"];

    removeFields.forEach((item) => delete query[item]);

    // Pagination

    let page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 4;
    const skip = (page - 1) * limit;

    const tripsQuery = Trips.find(query).skip(skip).limit(limit);

    if (req.query.page) {
      const totalTripsCount = await Trips.countDocuments(query);

      if (skip >= totalTripsCount) {
        page = 1;
      }
    }

    const trips = await tripsQuery.exec();
    res.status(200).json({ trip: trips, busdetail: busDetail });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
