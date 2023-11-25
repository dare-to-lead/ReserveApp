import React from "react";
// import { Link } from "react-router-dom";
import busLogo from "../../assets/buslogo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  navbar-collapse px-5 fixed-top bg-white">
      <div className="container-fluid d-flex">
        <img
          src={busLogo}
          // className="px-5"
          style={{ width: "50px", height: "50px", paddingRight: "10px" }}
        />

        <a
          className="navbar-brand fw-bold fs-1"
          href="/"
          style={{ color: "rgb(202, 112, 7)" }}>
          RESERVE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-5 fs-4 ">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-5 fs-4 ">
              <a className="nav-link" href="#">
                Tickets
              </a>
            </li>
            <li className="nav-item mx-5 fs-4 ">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item mx-5 fs-4 ">
              <a className="nav-link" href="#">
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
