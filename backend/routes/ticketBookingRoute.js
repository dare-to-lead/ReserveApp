const express = require("express");
const router = express.Router();
const ticketBookingController = require("../controllers/ticketBookingController");

// Route to book a ticket
router.post("/book-ticket", ticketBookingController.bookTicket);

module.exports = router;
