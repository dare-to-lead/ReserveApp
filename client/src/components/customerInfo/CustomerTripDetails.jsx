import React from "react";
import { useSelector } from "react-redux";

const CustomerTripDetails = () => {
  const result = useSelector((state) => state.ticketTripDetail);

  console.log("custripdet", result);

  return (
    <div
      class=" my-2 rounded shadow p-1 bg-light"
      style={{ border: "2px solid rgb(202, 112, 7)" }}>
      {/* {result.map((item) => ( */}
      <div class="d-flex-column p-2">
        <small className="d-flex">
          {/* <span className="fw-bold">Ticket ID: {result._id}</span> */}
          <small className="bg-success text-light px-1 mx-2 rounded h-25">
            {/* <i class="fa-regular fa-star">{result.rating}</i> */}
          </small>
          <small className="text-muted">Rating</small>
        </small>

        <div className="d-flex my-2 gap-5">
          <div>
            <h5 className="fw-bold">Sikkim to Daman</h5>
            <div className="fw-bold" style={{ fontSize: "12px" }}>
              {/* Bus:- {result.busOperator} */}
            </div>
            <div className="text-muted" style={{ fontSize: "12px" }}>
              {" "}
              Your seats:
              {/* {result.seatBooked.map((seat) => (
                <span> {seat}-</span>
              ))} */}
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default CustomerTripDetails;
