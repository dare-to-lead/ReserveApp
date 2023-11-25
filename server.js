require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tripsRoutes = require("./backend/routes/tripsRoute");
const stateDistrictRoutes = require("./backend/routes/stateDistrictRoute");
const ticketBookingRoutes = require("./backend/routes/ticketBookingRoute");
const bodyParser = require("body-parser");
const DATABASE_URL = process.env.DATABASE_URL;

const port = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Connect to DATABASE
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Routes
app.use("/redbus", tripsRoutes);
app.use("/redbus", stateDistrictRoutes);
app.use("/redbus", ticketBookingRoutes);

// Start Server

app.listen(port, () => console.log(`App listening on port ${port}!`));
