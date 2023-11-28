// stateDistrictRoutes.js
const express = require("express");
const router = express.Router();
const stateDistrictController = require("../controllers/stateDistrictController");

router.get("/stateDistricts", stateDistrictController.getAllDistricts);

// Route to get a district by ID
router.get("/stateDistricts/:id", stateDistrictController.getDistrictById);
module.exports = router;
