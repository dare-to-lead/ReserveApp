const Busdetails = require("../models/busDetailsModel");

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
