import React from "react";
import image from "../../src/assets/image.jpg";
import TripFindingForm from "./form/TripFindingForm";

const HeroImage = ({ setFilters }) => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-center fixed order-lg-first order-md-last order-sm-last">
      <div className="w-100 w-lg-50 h-100 ms-auto order-lg-last order-md-first order-sm-first">
        <img
          className="w-100 h-100"
          style={{ borderBottomLeftRadius: "80%" }}
          alt="heroImage"
          src={image}
        />
      </div>
      <div className="w-100 w-lg-50 h-75 align-self-center mb-3 mb-lg-0">
        <TripFindingForm setFilters={setFilters} />
      </div>
    </div>
  );
};

export default HeroImage;
