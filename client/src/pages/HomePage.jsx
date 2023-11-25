import React from "react";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/navbar/Navbar";
import Cards from "../components/card/Cards";
import ReviewCards from "../components/card/ReviewCards";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div
        className="w-100 h-100 d-flex "
        style={{ backgroundColor: "rgb(202, 112, 7)" }}>
        <HeroImage />
        <Navbar />
      </div>
      <Cards />
      <ReviewCards />
      <Footer />
    </div>
  );
};

export default HomePage;
