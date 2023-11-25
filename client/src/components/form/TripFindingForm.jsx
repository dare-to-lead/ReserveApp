import React from "react";

const TripFindingForm = () => {
  return (
    <div
      className="container-fluid rounded w-50 h-75 mt-5 "
      style={{ backgroundColor: "rgb(242, 229, 220)" }}>
      <form className="d-flex flex-column align-items-center">
        <div className="mb-3 w-75 mt-3 ">
          <label htmlFor="origin" className="mb-3 fs-5">
            Origin
          </label>

          <div type="text" id="origin" className="input-group">
            <input
              className="form-control"
              type="text"
              aria-label="Text input with dropdown button"
              style={{
                backgroundColor: "rgb(152, 180, 187)",
                borderTop: "3px solid rgb(202, 112, 7)",
              }}
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"></button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="/">
                  Mumbai
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Banglore
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Pune
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Andheri
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-3 w-75 ">
          <label htmlFor="destination" className="mb-3 fs-5">
            Destination
          </label>

          <div type="text" id="destination" className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              style={{
                backgroundColor: "rgb(152, 180, 187)",
                borderTop: "3px solid rgb(202, 112, 7)",
              }}
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"></button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Mumbai
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Banglore
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Pune
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Andheri
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="date" className="mb-3 fs-5">
            Pick A Date
          </label>

          <div type="date" id="date" className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              style={{
                backgroundColor: "rgb(152, 180, 187)",
                borderTop: "3px solid rgb(202, 112, 7)",
              }}
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"></button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="/">
                  Mumbai
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Banglore
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Pune
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Andheri
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-grid col-8 mt-4 ">
          <button className="btn btn-secondary py-3 px-5 fs-4">
            Search Trips
          </button>
        </div>
      </form>
    </div>
  );
};

export default TripFindingForm;
