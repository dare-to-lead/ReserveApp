import React from "react";
import image from "../../src/assets/image.jpg";
import TripFindingForm from "./form/TripFindingForm";

export const HeroImage = () => {
  return (
    <div className="d-flex justify-content-center fixed">
      <div className="w-50 h-75 align-self-center ">
        <TripFindingForm />
      </div>
      <img
        className="w-50 h-100 ms-auto"
        style={{ borderBottomLeftRadius: "80%" }}
        alt="heroImage"
        src={image}
      />
    </div>
  );
};

export default HeroImage;
