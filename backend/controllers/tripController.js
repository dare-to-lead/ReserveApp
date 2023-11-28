// tripsController.js
const BusDetails = require("../models/busDetailsModel");
const Trips = require("../models/tripsModel");
const State = require("../models/stateDistrictModel");

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
  const { date, rating, from, to } = req.query;
  console.log(req.params);

  try {
    const filter = {};

    if (date) {
      filter.date = Date.parse(date);
    }

    if (rating) {
      filter.rating = { $gte: +rating };
    }

    if (from) {
      const fromDistrict = await State.findOne(
        { "districts.name": from },
        { "districts.$": 1 }
      );

      if (
        fromDistrict &&
        fromDistrict.districts &&
        fromDistrict.districts.length > 0
      ) {
        filter.from = fromDistrict.districts[0]._id;
      } else {
        console.log('District not found for "from" location');
      }
    }

    if (to) {
      const toDistrict = await State.findOne(
        { "districts.name": to },
        { "districts.$": 1 }
      );

      if (
        toDistrict &&
        toDistrict.districts &&
        toDistrict.districts.length > 0
      ) {
        filter.to = toDistrict.districts[0]._id;
      } else {
        console.log('District not found for "to" location');
      }
    }
    // console.log(filter);
    const trips = await Trips.find(filter).limit(50);
    res.status(200).json(trips);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: error.message });
  }
  // try {
  //   let query = { ...req.query };

  //   // Removing some fields for category
  //   const removeFields = ["page", "limit"];

  //   removeFields.forEach((item) => delete query[item]);

  //   // Pagination

  //   let page = req.query.page * 1 || 1;
  //   const limit = req.query.limit * 1 || 4;
  //   const skip = (page - 1) * limit;

  //   const tripsQuery = Trips.find(query).skip(skip).limit(limit);

  //   if (req.query.page) {
  //     const totalTripsCount = await Trips.countDocuments(query);

  //     if (skip >= totalTripsCount) {
  //       page = 1;
  //     }
  //   }

  //   const trips = await tripsQuery.exec();
  //   res.status(200).json({ trips });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
};
