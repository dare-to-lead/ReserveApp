const Busdetails = require("../models/busDetailsModel");

exports.createBusDetail = async (req, res) => {
  try {
    const {
      name,
      totalSeats,
      category,
      totalWindowSeatsAvailable,
      rating,
      animeties,
    } = req.body;

    const newbusdetail = new Busdetails({
      name,
      totalSeats,
      category,
      totalWindowSeatsAvailable,
      rating,
      animeties,
    });

    const savedBusdetail = await newbusdetail.save();

    res.status(201).json(savedBusdetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.getBusDetails = async (req, res) => {
  try {
    console.log(req.query);
    const { id } = req.query;
    const busDetail = await Busdetails.findById({ _id: id });
    res.status(200).json(busDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
