import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#808000" }}>
      <div className="row px-4 pt-4 ">
        <div className="col text-white ">
          <a className="fs-3 text-white fw-bold border border-0 text-decoration-none">
            RESERVE
          </a>
          <p>When you have a choice. Choose Reserve.</p>
          <p>
            Reserve offers bus tickets booking
            <br />
            through its website, IOS, and android
            <br />
            mobile app for all major cities.
          </p>
          <div>reserve.bus@reserve.com</div>
        </div>

        <div className="col ">
          <div className="row ">
            <div className="col ">
              <div className="text-left">
                <ul className="list-item">
                  <li className="list-group-item mb-2 text-white bg-transparent border border-0 ">
                    About
                  </li>

                  <li className="list-group-item mb-2 text-white bg-transparent border border-0">
                    Constact US
                  </li>
                </ul>
              </div>
            </div>
            <div className="col mb-3 border-0 ">
              <ul className="list-item">
                <li className="list-group-item mb-2 text-white bg-transparent border border-0">
                  Careers
                </li>
                <li className="list-group-item mb-2 text-white bg-transparent border border-0">
                  FAQ
                </li>
                <li className="list-group-item mb-2 text-white bg-transparent border border-0">
                  T & C
                </li>
                <li className="list-group-item mb-2 text-white bg-transparent border border-0">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="fs-6 fw-bold mx-5 mb-5 text-white bg-transparent">
                Follow Us
              </div>
              <div className="d-flex mx-5">
                <AiOutlineInstagram className="fs-1 " />
                <AiOutlineFacebook className="fs-1 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-light mx-4" />
      <div className="d-flex justify-content-center  align-items-center pb-3 text-white">
        All rights reserved - 2023
      </div>
    </div>
  );
};

export default Footer;
