import React, { useState } from "react";
import Seat from "./Seats";
const BusSeats = ({ seatBooked }) => {
  const [tobookSeat, setToBookSeat] = useState([]);
  const [updateseatBooked, setupdateSeatBooked] = useState(seatBooked);

  const Lowerleft = ["S1", "S2", "S3", "S4", "S5", "S6", "S7"];
  const Lowermid = ["S8", "S9", "S10", "S11", "S12", "S13", "S14"];
  const Lowerright = ["S15", "S16", "S17", "S18", "S19"];
  const Upperleft = ["S20", "S21", "S22", "S23", "S24", "S25", "S26"];
  const Uppermid = [, "S27", "S28", "S29", "S30", "S31", "S32", "S33"];
  const Upperright = ["S34", "S35", "S36", "S37", "S38"];

  const handleClickSeat = (item) => {
    const updatedSeats = [...tobookSeat];
    const index = updatedSeats.indexOf(item);

    if (index === -1) {
      updatedSeats.push(item);
    } else {
      updatedSeats.splice(index, 1);
    }

    setToBookSeat(updatedSeats);
    setupdateSeatBooked(updatedSeats);
  };

  const isBooked = (item) => seatBooked.includes(item);
  const isVacant = (item) =>
    !seatBooked.includes(item) && tobookSeat.includes(item);

  const getSeatColor = (seat) => {
    if (isBooked(seat)) {
      return "grey";
    } else if (isVacant(seat)) {
      return "blue";
    } else {
      return "";
    }
  };

  return (
    <div class="col-lg-6 col-sm-12 d-flex-column bg-light ">
      <div className="border border-1 my-2 shadow rounded">
        <div className="d-flex justify-content-between align-items-center">
          <div
            className="p-2 fw-bold text-muted d-flex justify-content-between align-items-center"
            style={{ writingMode: "vertical-lr", fontSize: "10px" }}>
            Lower Deck
          </div>
          <div className="flex-grow-1  d-flex-column mx-2 p-2">
            <div className="d-flex justify-content-between align-items-center">
              {Lowerleft.map((seat) => (
                <Seat
                  key={seat}
                  bg={getSeatColor(seat)}
                  onClick={() => handleClickSeat(seat)}
                />
              ))}
            </div>
            <div className="d-flex justify-content-between align-items-center my-2">
              {Lowermid.map((seat) => (
                <Seat
                  key={seat}
                  bg={getSeatColor(seat)}
                  onClick={() => handleClickSeat(seat)}
                />
              ))}
            </div>
            <div className="d-flex flex-row-reverse align-items-center gap-3 mt-4">
              {Lowerright.map((seat) => (
                <Seat
                  key={seat}
                  bg={getSeatColor(seat)}
                  onClick={() => handleClickSeat(seat)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border border-1 my-2 shadow rounded">
        <div className="d-flex justify-content-between align-items-center">
          <div
            className="p-2 fw-bold text-muted d-flex justify-content-between align-items-center"
            style={{ writingMode: "vertical-lr", fontSize: "10px" }}>
            Lower Deck
          </div>
          <div className="flex-grow-1  d-flex-column mx-2 p-2">
            <div className="d-flex justify-content-between align-items-center">
              {Upperleft.map((seat) => (
                <Seat
                  key={seat}
                  bg={getSeatColor(seat)}
                  onClick={() => handleClickSeat(seat)}
                />
              ))}
            </div>
            <div className="d-flex justify-content-between align-items-center my-2">
              {Uppermid.map((seat) => (
                <Seat
                  key={seat}
                  bg={getSeatColor(seat)}
                  onClick={() => handleClickSeat(seat)}
                />
              ))}
            </div>
            <div className="d-flex flex-row-reverse align-items-center gap-3 mt-4">
              {Upperright.map((seat) => (
                <Seat
                  key={seat}
                  bg={getSeatColor(seat)}
                  onClick={() => handleClickSeat(seat)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSeats;
