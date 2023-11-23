const express = require("express");
const router = express.Router();
const stateDistrictController = require("../controllers/stateDistrictController");

// Route to get all states and districts
router.get("/stateDistricts", stateDistrictController.getAllDistricts);

module.exports = router;
