import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTicketDetails } from "../../redux/actions/postTicketBooking";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const trip = useSelector((state) => state.ticketTripDetail);
  console.log("tickettrip", trip);
  const seatNumber = trip.tobookSeat;
  console.log("seatnumber", seatNumber);

  //   {
  //     "trip":"6568d4723efef197e5bb842e",
  //      "passengerName":"Anjum",
  //      "seatNumber":5,
  //      "contactNumber": 9876543239,
  //      "email":"nhz@kjf.com"
  // }
  console.log("trip", trip);
  const dispatch = useDispatch();
  const [fname, setFname] = useState("");
  const [age, setAge] = useState("");
  const [emailId, setEmailId] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [formValue, setFormValue] = useState({
    fullName: "",
    Age: "",
    EmailId: "",
    City: "",
    Genger: "",
    MobileNo: "",
  });

  console.log("formvalues", formValue);
  const handleSubmit = async (event) => {
    await event.preventDefault();
    await setFormValue({
      fullName: fname,
      Age: age,
      EmailId: emailId,
      City: city,
      Genger: gender,
      MobileNo: mobileNo,
    });
    navigate("/confirmation");
    dispatch(
      postTicketDetails({
        trip: trip._id,
        passengerName: fname,
        seatNumber: seatNumber,
        contactNumber: mobileNo,
        email: emailId,
      })
    );
  };

  return (
    <div
      className="bg-light my-1 rounded shadow p-2"
      style={{ border: "2px solid rgb(202, 112, 7)" }}>
      <form
        className="row g-3 needs-validation"
        id="userInfo"
        onSubmit={handleSubmit}
        noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            style={{ border: "2px solid rgb(202, 112, 7)" }}
            id="validationCustom01"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            style={{ border: "2px solid rgb(202, 112, 7)" }}
            id="validationCustom02"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Email ID
          </label>
          <div
            className="input-group rounded-2  has-validation"
            style={{ border: "2px solid rgb(202, 112, 7)" }}>
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="email"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            style={{ border: "2px solid rgb(202, 112, 7)" }}
            id="validationCustom03"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            style={{ border: "2px solid rgb(202, 112, 7)" }}
            id="validationCustom04"
            onChange={(e) => setGender(e.target.value)}
            required>
            <option defaultValue>other</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            Mobile No
          </label>
          <input
            type="tel"
            className="form-control"
            style={{ border: "2px solid rgb(202, 112, 7)" }}
            id="validationCustom05"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
