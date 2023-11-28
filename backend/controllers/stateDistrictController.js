const State = require("../models/stateDistrictModel");

exports.getDistrictById = async (req, res) => {
  try {
    const { id } = req.params; // Use req.params to get the district ID from the URL
    const stateDistrict = await State.findOne(
      { "districts._id": id },
      { "districts.$": 1 }
    );

    if (!stateDistrict) {
      return res.status(404).json({ error: "District not found" });
    }

    const district = stateDistrict.districts[0];
    const districtName = district ? district.name : null;

    res.status(200).json({ districtName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllDistricts = async (req, res) => {
  const { query } = req.query;
  try {
    const matchingDistricts = await State.aggregate([
      {
        $unwind: "$districts",
      },
      {
        $match: {
          "districts.name": { $regex: new RegExp(query, "i") },
        },
      },
      {
        $addFields: {
          isStartsWithQuery: {
            $eq: [{ $substrCP: ["$districts.name", 0, query.length] }, query],
          },
        },
      },
      {
        $sort: {
          isStartsWithQuery: -1,
        },
      },
      {
        $limit: 10,
      },
      {
        $group: {
          _id: null,
          districts: {
            $push: {
              id: "$districts._id",
              district: "$districts.name",
              state: "$state",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          districts: 1,
        },
      },
    ]);
    res.json(matchingDistricts[0]?.districts || []);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// router.get("/stateDistricts/", stateDistrictController.getAllDistricts);
