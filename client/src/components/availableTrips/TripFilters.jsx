import React from "react";

const TripFilters = () => {
  return (
    <div className="col-lg-3 col-md-3 col-12 pt-4">
      <div>
        <button
          className="mx-lg-5 mx-md-2 mx-sm-2 mt-4 py-2 bg-light rounded "
          style={{
            width: "15.8rem",
            border: "2px solid rgb(202, 112, 7)",
          }}>
          Filters <span className="ps-5 ms-5">Clear All</span>
        </button>
      </div>
      <div>
        <div
          className="card mx-lg-5 mx-md-2 mx-sm-2  mt-lg-4 ps-3"
          style={{
            width: "15.8rem",
            border: "2px solid rgb(202, 112, 7)",
          }}>
          <div className="card-body">
            <h5 className="card-title my-lg-3">Departure Time</h5>
            <div className="form-check my-lg-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios1">
                Morning Session
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios2">
                Afternoon Session
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios3">
                Evening Session
              </label>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title my-lg-3">Arrival Time</h5>
            <div className="form-check my-lg-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios1">
                Morning Session
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios2">
                Afternoon Session
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios3">
                Evening Session
              </label>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title my-lg-3">Bus Rating</h5>
            <div className="form-check my-lg-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios1">
                4 Stars and more
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="checkbox"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios2">
                3 Stars and more
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="checkbox"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios3">
                0-2 stars
              </label>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title my-lg-3">Bus Operator</h5>
            <div className="form-check my-lg-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios1">
                Zing Bus
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="checkbox"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios2">
                Intercity Smart
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="checkbox"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios3">
                Safar Exp
              </label>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title my-lg-3">Pickup Point</h5>
            <div className="form-check my-lg-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios1">
                Kolkata
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios2">
                Mumbai
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios3">
                Banglore
              </label>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title my-lg-3">Drop Point</h5>
            <div className="form-check my-lg-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios1">
                Kolkata
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios2">
                Mumbai
              </label>
            </div>
            <div className="form-check my-lg-3 ">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              />
              <label
                className="form-check-label ps-lg-3 "
                htmlFor="exampleRadios3">
                Banglore
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripFilters;
