import React from "react";
import { useSelector } from "react-redux";

const FareDetails = () => {
  const data = useSelector((state) => state.ticketTripDetail);
  let busFare = data.busFare;

  let total = parseInt(busFare) * 3 + 150 - 50;
  return (
    <div
      class="col rounded shadow p-3 my-2 bg-light "
      style={{ height: "50%", border: "2px solid rgb(202, 112, 7)" }}>
      <div className="fw-bold" style={{ fontSize: "16px" }}>
        Fare Details
      </div>
      <div className="d-flex my-3">
        <div className="flex-grow-1" style={{ fontSize: "14px" }}>
          Base Fare
        </div>
        <div className="fw-bold" style={{ fontSize: "18px" }}>
          ₹{busFare}
        </div>
      </div>
      <div className="d-flex my-3">
        <div className="flex-grow-1" style={{ fontSize: "14px" }}>
          Tax
        </div>
        <div className="fw-bold" style={{ fontSize: "18px" }}>
          ₹150
        </div>
      </div>
      <div className="d-flex my-3">
        <div className="flex-grow-1" style={{ fontSize: "14px" }}>
          Offer applied
        </div>
        <div className="fw-bold" style={{ fontSize: "18px" }}>
          ₹50
        </div>
      </div>
      <hr className="border border-dark mx-1" />
      <div className="d-flex my-3">
        <div className="flex-grow-1" style={{ fontSize: "14px" }}>
          Total Price
        </div>
        <div className="fw-bold" style={{ fontSize: "18px" }}>
          ₹{total}
        </div>
      </div>
    </div>
  );
};

export default FareDetails;
