const express = require("express");
const router = express.Router();
const getBusDetails = require("../controllers/busDetailsController");

// Route to get all states and districts
router.get("/busdetail", getBusDetails.getBusDetails);
router.post("/busdetail", getBusDetails.createBusDetail);

module.exports = router;
