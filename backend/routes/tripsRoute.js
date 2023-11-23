// tripsRoutes.js
const express = require("express");
const router = express.Router();
const tripsController = require("../controllers/tripController");

// Route to create a new trip
router.post("/trips", tripsController.createTrip);

// Route to get all trips
router.get("/trips", tripsController.getTrips);

module.exports = router;
