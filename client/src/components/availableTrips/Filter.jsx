import React from "react";
import { IconContext } from "react-icons/lib";
import { MdOutlineStar } from "react-icons/md";

const Filter = ({ data }) => {
  // console.log(
  //   "filterdata",
  //   data?.data?.trips.map((trip) => {
  //     return trip.busFare;
  //   })
  // );
  const calculateDuration = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);

    // Calculate duration in milliseconds
    const durationMs = end - start;

    // Convert duration to hours and minutes
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours} hrs ${minutes} min`;
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div
      className="container-fluid w-100 h-100 d-flex"
      style={{ backgroundColor: "#F2E5DC" }}>
      <div className="col-3 pt-4">
        <div>
          <button
            className="mx-5 mt-4 py-2 bg-light rounded "
            style={{
              width: "15.8rem",
              border: "2px solid rgb(202, 112, 7)",
            }}>
            Filters <span className="ps-5 ms-5">Clear All</span>
          </button>
        </div>
        <div>
          <div
            className="card mx-5 mt-lg-4 ps-3"
            style={{ width: "15.8rem", border: "2px solid rgb(202, 112, 7)" }}>
            <div className="card-body">
              <h5 className="card-title my-lg-3">Departure Time</h5>
              <div className="form-check my-lg-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios1">
                  Morning Session
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios2">
                  Afternoon Session
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios3">
                  Evening Session
                </label>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title my-lg-3">Arrival Time</h5>
              <div className="form-check my-lg-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios1">
                  Morning Session
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios2">
                  Afternoon Session
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios3">
                  Evening Session
                </label>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title my-lg-3">Bus Rating</h5>
              <div className="form-check my-lg-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios1">
                  4 Stars and more
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios2">
                  3 Stars and more
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios3">
                  0-2 stars
                </label>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title my-lg-3">Bus Operator</h5>
              <div className="form-check my-lg-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios1">
                  Zing Bus
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios2">
                  Intercity Smart
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios3">
                  Safar Exp
                </label>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title my-lg-3">Pickup Point</h5>
              <div className="form-check my-lg-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios1">
                  Kolkata
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios2">
                  Mumbai
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios3">
                  Banglore
                </label>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title my-lg-3">Drop Point</h5>
              <div className="form-check my-lg-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios1">
                  Kolkata
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios2">
                  Mumbai
                </label>
              </div>
              <div class="form-check my-lg-3 ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                />
                <label
                  className="form-check-label ps-lg-3 "
                  for="exampleRadios3">
                  Banglore
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-9">
        {data?.data?.trips?.map((trip) => (
          <div class="card mt-5 mx-5" key={trip.id}>
            <div
              class="card-body rounded px-5"
              style={{ border: "2px solid rgb(202, 112, 7)" }}>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5 class="card-title fw-bold text-warning pt-3">
                    {trip.busOperator}
                    <span className="mx-3 bg-success text-light fw-normal p-1 rounded">
                      {" "}
                      {trip.rating}
                      <IconContext.Provider
                        value={{
                          color: "yellow",
                          size: "1.2rem",
                        }}>
                        <MdOutlineStar />
                      </IconContext.Provider>
                    </span>
                    <span className="text-muted fw-normal fs-6">ratings</span>
                  </h5>
                  <h6 class="card-subtitle py-3  text-muted ">
                    {trip.category} | total seats {trip.totalSeats}
                  </h6>
                  <p className="py-3">
                    <span className="card-text fs-3">
                      {formatTimestamp(trip.startTime)}
                      <small className="text-muted fs-6">
                        {" "}
                        ------
                        {calculateDuration(trip.startTime, trip.endTime)} ------
                      </small>{" "}
                      {formatTimestamp(trip.endTime)}
                    </span>
                  </p>
                </div>
                <div class="">
                  <div className="my-3 fs-5">Trip Cost</div>
                  <div className="text-muted" style={{ fontSize: "10px" }}>
                    Per Ticket Price
                  </div>
                  <h2 className="fw-bold">₹{trip.busFare}</h2>
                  <button
                    className="btn my-3 px-4 text-light "
                    style={{ backgroundColor: "rgb(202, 112, 7)" }}>
                    View Seat
                  </button>
                </div>
              </div>
              <span className="d-flex flex-fill fw-normal text-primary">
                {trip?.amenities?.map((amenity) => (
                  <li className="d-flex mx-3" key={amenity}>
                    {amenity}
                  </li>
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
