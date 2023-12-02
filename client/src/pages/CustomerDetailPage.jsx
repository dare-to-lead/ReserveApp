import React from "react";
import Form from "../components/customerInfo/Form";
import FareDetails from "../components/customerInfo/FareDetails";
import CustomerTripDetails from "../components/customerInfo/CustomerTripDetails";

const CustomerInfo = () => {
  return (
    <div
      className="container-fluid"
      style={{
        paddingTop: "60px",
        backgroundColor: "#F2E5DC",
        height: "100vh",
      }}>
      <div class="row">
        <div class="d-flex-column col-md-8 col-sm-12">
          <CustomerTripDetails />
          <div class="my-4">
            <div className="fw-bold">Enter traveller Details</div>
            <Form />
          </div>
        </div>
        <FareDetails />
      </div>
    </div>
  );
};

export default CustomerInfo;
