const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
  },
  districts: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});
const State = mongoose.model("state_district", stateSchema);

module.exports = State;
