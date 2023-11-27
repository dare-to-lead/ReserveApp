// tripsController.js
const BusDetails = require("../models/busDetailsModel");
const Trips = require("../models/tripsModel");

//create or post a trip
exports.createTrip = async (req, res) => {
  try {
    const { from, to, busDetails, startTime, endTime, seatBooked, busFare } =
      req.body;

    const busDetail = await BusDetails.findOne({ _id: busDetails });
    // busDetail.exec();

    const newTrip = new Trips({
      from,
      to,
      busDetails,
      startTime,
      endTime,
      seatBooked,
      busFare,
      busOperator: busDetail ? busDetail.name : busDetail,
      category: busDetail ? busDetail.category : busDetail,
      totalSeats: busDetail ? busDetail.totalSeats : busDetail,
      amenities: busDetail ? busDetail.animeties : busDetail,
      rating: busDetail ? busDetail.rating : busDetail,
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
    res.status(200).json({ trips });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
