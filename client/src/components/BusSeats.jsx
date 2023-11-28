import React from "react";
import Seat from "./Seats";

const BusSeats = () => {
  return (
    <div class="col-lg-8 col-sm-12 d-flex-column">
      <div className="border border-1 d-flex justify-content-between align-items-center shadow rounded">
        <div
          className="p-2 fw-bold text-muted d-flex justify-content-between align-items-center"
          style={{ writingMode: "vertical-lr", fontSize: "10px" }}>
          Uppar Deck
        </div>
        <div className="flex-grow-1 d-flex-column mx-2 p-2">
          <div className="d-flex justify-content-between align-items-center">
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
          </div>
          <div className="d-flex justify-content-between align-items-center my-2">
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
          </div>
          <div className="d-flex flex-row-reverse align-items-center gap-3 mt-4">
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
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
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div className="d-flex justify-content-between align-items-center my-2">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div className="d-flex flex-row-reverse align-items-center gap-3 mt-4">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSeats;
