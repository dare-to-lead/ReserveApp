import React from "react";
import { Link } from "react-router-dom";

const PayementProceed = ({ place1, place2 }) => {
  return (
    <div class="col-lg-4 col-sm-12 border border-1 mx-2 p-2 rounded mb-3 shadow">
      <small className="fw-bold">Boarding and Dropping</small>
      <div className="d-flex justify-content-center  align-items-center">
        <div className="flex-grow-1 my-2">
          <div className="d-block fw-bold" style={{ fontSize: "11px" }}>
            {/* -{place1} */}
          </div>
          <div className="text-muted" style={{ fontSize: "11px" }}>
            {/* {place2} */}
          </div>
        </div>
        <div className="fw-bold" style={{ fontSize: "12px" }}>
          {/* {mainitem.depTime} */}
        </div>
      </div>
      <div className="d-flex justify-content-center  align-items-center">
        <div className="flex-grow-1 my-2">
          <div className="d-block fw-bold" style={{ fontSize: "11px" }}>
            {/* -{mainitem.dropPoint} */}
          </div>
          <div className="text-muted" style={{ fontSize: "11px" }}>
            {/* {mainitem.arrPoint} */}
          </div>
        </div>
        <div className="fw-bold" style={{ fontSize: "12px" }}>
          {/* {mainitem.arrTime} */}
        </div>
      </div>
      <hr className="border border-dark my-1" />
      <div className="d-flex align-items-center">
        <div className="fw-bold flex-grow-1" style={{ fontSize: "12px" }}>
          Seat No
        </div>
        <div className="fw-bold" style={{ fontSize: "12px" }}>
          {/* {seatNumber ? seatNumber : "1"} */}
        </div>
      </div>
      <hr className="border border-dark my-1" />
      <div className="fw-bold my-2" style={{ fontSize: "13px" }}>
        Fare Details
      </div>
      <div className="d-flex justify-content-center  align-items-center">
        <div className="flex-grow-1 my-2">
          <div className="d-block fw-bold" style={{ fontSize: "11px" }}>
            Amount
          </div>
          <div className="text-muted" style={{ fontSize: "11px" }}>
            {/* Taxi Service, {mainitem.dropPoint} */}
          </div>
        </div>
        <div className="fw-bold" style={{ fontSize: "15px" }}>
          {/* INR {prices ? prices : "899"}.00 */}
        </div>
      </div>
      <Link
        to="/CustomerDetails"
        className="btn btn-warning rounded fw-bold text-white w-100 mt-3">
        Proceed to Payment
      </Link>
    </div>
  );
};

export default PayementProceed;
