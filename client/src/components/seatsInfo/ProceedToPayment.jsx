import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { tripInfo } from "../../redux/actions/postTicketBooking";
import { ADD_TRIP_INFO } from "../../redux/actionType";

const PayementProceed = ({ tobookSeat, trip }) => {
  const dispatch = useDispatch();
  console.log("tobookseat", tobookSeat);
  return (
    <div class="col-lg-12 col-sm-12 border border-1 mx-2 p-2 rounded mb-3 shadow bg-light ">
      <small className="fw-bold">Your Trip Details</small>
      <div className="d-flex justify-content-center  align-items-center">
        <div className="flex-grow-1 my-2">
          <div className="d-block fw-bold" style={{ fontSize: "11px" }}>
            Sikkim
          </div>
          <div className="text-muted" style={{ fontSize: "11px" }}>
            Sikkim road
          </div>
        </div>
        <div className="fw-bold" style={{ fontSize: "12px" }}>
          09 : 39am
        </div>
      </div>
      <div className="d-flex justify-content-center  align-items-center">
        <div className="flex-grow-1 my-2">
          <div className="d-block fw-bold" style={{ fontSize: "11px" }}>
            Daman
          </div>
          <div className="text-muted" style={{ fontSize: "11px" }}>
            Daman road
          </div>
        </div>
        <div className="fw-bold" style={{ fontSize: "12px" }}>
          04 : 42pm
        </div>
      </div>
      <hr className="border border-dark my-1" />
      <div className="d-flex align-items-center">
        <div className="fw-bold flex-grow-1" style={{ fontSize: "12px" }}>
          Seat No
        </div>
        <div className="fw-bold" style={{ fontSize: "12px" }}>
          {tobookSeat?.map((seat) => (
            <span>{seat},</span>
          ))}
        </div>
      </div>
      <hr className="border border-dark my-1" />
      <div className="fw-bold my-2" style={{ fontSize: "13px" }}>
        Fare Details: <span className="text-muted ps-3"> ₹ 670 per seat</span>
      </div>
      <div className="d-flex justify-content-center  align-items-center">
        <div className="flex-grow-1 my-2">
          <div className="d-block fw-bold" style={{ fontSize: "13px" }}>
            Total
          </div>
        </div>
        <div className="fw-bold" style={{ fontSize: "15px" }}>
          ₹ {"2010" ? "2010" : "00"}
        </div>
      </div>
      <Link
        to="/CustomerDetails"
        onClick={() => dispatch(tripInfo({ ...trip, tobookSeat }))}
        style={{ backgroundColor: "rgb(202, 112, 7)" }}
        className="btn  rounded fw-bold text-white w-100 mt-3">
        Proceed to Payment
      </Link>
    </div>
  );
};

export default PayementProceed;
