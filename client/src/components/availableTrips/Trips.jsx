import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import BusSeats from "../seatsInfo/BusSeats";
import TripFilters from "./TripFilters";

const Trips = () => {
  const [trip, setTrip] = useState([]);
  const [showSeatSelection, setShowSeatSelection] = useState(false);
  const [districtNames, setDistrictNames] = useState({});

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  async function district(id) {
    try {
      let res = await fetch(
        `http://localhost:8080/redbus/stateDistricts/${id}`
      );
      let result = await res.json();
      let districtName = result.districtName;
      return districtName;
    } catch (error) {
      console.log(error);
    }
  }

  async function getDistrictNames(fromId, toId) {
    try {
      const fromName = await district(fromId);
      const toName = await district(toId);
      return { from: fromName, to: toName };
    } catch (error) {
      console.error("Error fetching district names", error);
      return { from: "", to: "" };
    }
  }

  useEffect(() => {
    const fetchDistrictNames = async () => {
      const districtNamesData = {};
      for (const item of trip?.data?.trips || []) {
        const { from, to } = item;
        try {
          const names = await getDistrictNames(from, to);
          districtNamesData[`${from}-${to}`] = names;
        } catch (error) {
          console.error(
            `Error fetching district names for trip ${from}-${to}`,
            error
          );
        }
      }
      setDistrictNames(districtNamesData);
    };

    fetchDistrictNames();
  }, [data]);

  const calculateDuration = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const durationMs = end - start;
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} hrs ${minutes} min`;
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  useEffect(() => {
    setTrip(data);
  }, [data]);

  return (
    <div className="container-fluid p-5 ">
      <div className="row">
        <TripFilters />
        <div className="col-lg-8 col-md-8 col-sm-10 col-12 ms-md-5 ps-md-5 ">
          {trip.loading ? (
            <h1>...Loading</h1>
          ) : (
            trip?.data?.trips.length > 0 &&
            trip?.data?.trips?.map((trip) => (
              <div
                className="card mt-5 mx-lg-2 mx-md-2 mx-sm-2 shadow"
                key={trip.id}>
                <div
                  className="card-body rounded px-5"
                  style={{ border: "2px solid rgb(202, 112, 7)" }}>
                  <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title fw-bold text-warning pt-3">
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
                        <span className="text-muted fw-normal fs-6">
                          ratings
                        </span>
                      </h5>
                      <h6 className="card-subtitle py-3 text-muted ">
                        {trip.category} | total seats {trip.totalSeats}
                      </h6>
                      <span className="fs-3 fw-bold text-info ">
                        {districtNames[`${trip.from}-${trip.to}`]?.from}
                        -------------
                      </span>
                      <span className="fs-3 fw-bold text-info ">
                        {districtNames[`${trip.from}-${trip.to}`]?.to}
                      </span>
                      <p className="py-3">
                        <span className="card-text fs-3">
                          {formatTimestamp(trip.startTime)}
                          <small className="text-muted fs-6">
                            {" "}
                            ------
                            {calculateDuration(
                              trip.startTime,
                              trip.endTime
                            )}{" "}
                            ------
                          </small>{" "}
                          {formatTimestamp(trip.endTime)}
                        </span>
                      </p>
                    </div>
                    <div className="text-end">
                      <div className="my-3 fs-5">Trip Cost</div>
                      <div className="text-muted" style={{ fontSize: "10px" }}>
                        Per Ticket Price
                      </div>
                      <h2 className="fw-bold">₹{trip.busFare}</h2>
                      <button
                        onClick={() => setShowSeatSelection(!showSeatSelection)}
                        className="btn my-3 px-4 text-light"
                        style={{ backgroundColor: "rgb(202, 112, 7)" }}>
                        View Seat
                      </button>
                    </div>
                  </div>
                  <span className="d-lg-flex d-md-column d-sm-column flex-fill fw-normal text-primary">
                    {trip?.amenities?.map((amenity) => (
                      <li className="d-flex mx-3" key={amenity}>
                        {amenity}
                      </li>
                    ))}
                  </span>
                </div>
                {showSeatSelection && (
                  <>
                    <h3 className="fw-bold m-3">Select Seat</h3>
                    <div className="d-flex justify-content-around ">
                      <BusSeats seatBooked={trip.seatBooked} trip={trip} />
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Trips;
