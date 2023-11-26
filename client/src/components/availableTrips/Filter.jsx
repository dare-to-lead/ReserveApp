import React, { useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { MdOutlineStar } from "react-icons/md";

const Filter = ({ data }) => {
  async function getBusDetails(id) {
    const detail = await fetch(`http://localhost:8080/redbus/busdetail/${id}`);
    let response = detail.json();
    let busdata = response;
  }

  useEffect(() => {
    getBusDetails();
  }, []);

  return (
    <div
      className="container-fluid w-100 h-100 d-flex"
      style={{ backgroundColor: "#F2E5DC" }}>
      <div className="col-3 pt-4">
        <div>
          <button
            className="mx-5 mb-4 bg-light"
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
      <div classNameName="col-9">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title">
              InterCity Smart Bus{" "}
              <span className="mx-5 bg-success">
                <IconContext.Provider value={{ color: "yellow" }}>
                  <MdOutlineStar />
                </IconContext.Provider>
              </span>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default Filter;
