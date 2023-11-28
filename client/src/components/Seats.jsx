import React, { useState } from "react";
import seatImage from "../assets/seat.png";
const Seat = () => {
  // console.log("item", item)

  const [seatColor, setSeatColor] = useState("");
  const [selectSeat, setselectSeat] = useState(false);

  function handleSelectSeat() {
    if (selectSeat === false) {
      setSeatColor("blue");
      setselectSeat(true);
    } else {
      setSeatColor("");
      setselectSeat(false);
    }
  }

  return (
    <div>
      <img
        alt="busSeat"
        id="li"
        src={seatImage}
        className="border border-1 text-center rounded"
        onClick={handleSelectSeat}
        style={{
          width: "55px",
          backgroundColor: seatColor,
        }}
      />
    </div>
  );
};

export default Seat;
