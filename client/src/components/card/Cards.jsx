import React from "react";

const Cards = () => {
  return (
    <>
      <h1 className="text-center mt-5 fw-bold">Worlds Largest Ticketing Hub</h1>

      <div className="d-flex justify-content-center">
        <div className="card border-2 m-5">
          <img
            src="https://i.stack.imgur.com/kVrw9.jpg"
            className="card-img-top"
            style={{ width: "16rem", height: "10rem" }}
            alt="bus collection"
          />
          <div className="card-body">
            <p className="card-text fw-bold ">20000+ bus collection</p>
          </div>
        </div>
        <div className="card border-2 m-5">
          <img
            src="https://media.istockphoto.com/id/1412621642/vector/customer-feedback-user-experience-or-client-satisfaction-opinion-for-product-and-services.jpg?s=612x612&w=0&k=20&c=5FJpkXmxYj3S6dhEn65cab_v876zSHmVT-0Ba-SH97k="
            className="card-img-top"
            style={{ width: "16rem", height: "10rem" }}
            alt="bus collection"
          />
          <div className="card-body">
            <p className="card-text fw-bold ">30M+ happy customers</p>
          </div>
        </div>
        <div className="card border-2 m-5">
          <img
            src="https://media.istockphoto.com/id/921956738/vector/vector-tickets.jpg?s=612x612&w=0&k=20&c=el-VmYFog5QzH8U8vRMbXmp4NjH23uIUpPgXp6jIZ1A="
            className="card-img-top"
            style={{ width: "16rem", height: "10rem" }}
            alt="bus collection"
          />
          <div className="card-body">
            <p className="card-text fw-bold ">5000+ ticket book everyday</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
