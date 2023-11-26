const StateDistrict = require("../models/stateDistrictModel");

exports.getAllDistricts = async (req, res) => {
  try {
    const state_districts = await StateDistrict.find();
    res.status(200).json(state_districts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//const stateDistrict = await StateDistrict.findOne({ "districts._id": id }, { 'districts.$': 1 });
