import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { fetchAllDistrictsName } from "../../redux/actions/getDistrictApi";

const TripFindingForm = ({ setFilters }) => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [originSuggestionsVisible, setOriginSuggestionsVisible] =
    useState(true);
  const [destinationSuggestionsVisible, setDestinationSuggestionsVisible] =
    useState(true);
  const [originId, setOriginId] = useState("");
  const [destinationId, setDestinationId] = useState("");
  console.log(origin);
  // console.log("originId", districtId);

  const getDistrictApi = async (input, setSuggestions, setDistrictId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/redbus/stateDistricts?query=${input}`
      );
      console.log("dis", response.data);
      const suggestions = response.data.map((district) => district.district);
      const districtId = response.data.map((district) => district.id);
      console.log(districtId);
      // console.log("ids", ids);
      setDistrictId(districtId);
      setSuggestions(suggestions);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelectSuggestion = (
    suggestion,
    setInput,
    setSuggestions,
    setVisibility,
    setDistrictId
  ) => {
    setInput(suggestion);
    setSuggestions([]);
    setVisibility(false);
    setDistrictId({});
  };

  const handleChangeOrigin = (e) => {
    e.preventDefault();
    setOrigin(e.target.value);
  };

  const handleChangeDestination = (e) => {
    e.preventDefault();
    setDestination(e.target.value);
  };

  useEffect(() => {
    if (origin) {
      getDistrictApi(origin, setOriginSuggestions, setOriginId);
    }
  }, [origin]);

  useEffect(() => {
    if (destination) {
      getDistrictApi(destination, setDestinationSuggestions, setDestinationId);
    }
  }, [destination]);

  const handleSearch = () => {
    setFilters((prev) => ({ ...prev, originId, destinationId }));
    navigate("/trips");
  };

  return (
    <div
      className="container-fluid rounded w-50 h-75 mt-5 "
      style={{ backgroundColor: "rgb(242, 229, 220)" }}>
      <form className="d-flex flex-column align-items-center">
        <div className="mb-3 w-75 mt-3 ">
          <label htmlFor="origin" className="mb-3 fs-5">
            Origin
          </label>
          <div className="input-group">
            <input
              id="origin"
              type="search"
              onChange={handleChangeOrigin}
              value={origin}
              onBlur={() => setOriginSuggestionsVisible(false)}
              onFocus={() => setOriginSuggestionsVisible(true)}
              className="form-control"
              aria-label="Text input with dropdown button"
              style={{
                backgroundColor: "rgb(152, 180, 187)",
                borderTop: "3px solid rgb(202, 112, 7)",
              }}
            />
          </div>
          <ul className="bg-light">
            {originSuggestions &&
              originSuggestions.length > 0 &&
              originSuggestions.map((suggestion, index) => (
                <li
                  className="dropdown-item"
                  key={index}
                  onClick={() =>
                    handleSelectSuggestion(
                      suggestion,
                      setOrigin,
                      setOriginSuggestions,
                      setOriginSuggestionsVisible,
                      setOriginId
                    )
                  }>
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
        <div className="mb-3 w-75 ">
          <label htmlFor="destination" className="mb-3 fs-5">
            Destination
          </label>
          <div className="input-group">
            <input
              id="destination"
              type="search"
              onChange={handleChangeDestination}
              value={destination}
              onBlur={() => setDestinationSuggestionsVisible(false)}
              onFocus={() => setDestinationSuggestionsVisible(true)}
              className="form-control"
              aria-label="Text input with dropdown button"
              style={{
                backgroundColor: "rgb(152, 180, 187)",
                borderTop: "3px solid rgb(202, 112, 7)",
              }}
            />
          </div>
          <ul className="bg-light ">
            {destinationSuggestions &&
              destinationSuggestions.length > 0 &&
              destinationSuggestions.map((suggestion, index) => (
                <li
                  className="dropdown-item"
                  key={index}
                  onClick={() =>
                    handleSelectSuggestion(
                      suggestion,
                      setDestination,
                      setDestinationSuggestions,
                      setDestinationSuggestionsVisible,
                      setDestinationId
                    )
                  }>
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="date" className="mb-3 fs-5">
            Pick A Date
          </label>

          <div className="input-group">
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
              aria-label="Text input with dropdown button"
              style={{
                backgroundColor: "rgb(152, 180, 187)",
                borderTop: "3px solid rgb(202, 112, 7)",
              }}
            />
          </div>
        </div>
        <div className="d-grid col-8 mt-4 ">
          <button
            type="submit"
            className="btn btn-secondary py-3 px-5 fs-4"
            onClick={handleSearch}>
            Search Trips
          </button>
        </div>
      </form>
    </div>
  );
};

export default TripFindingForm;
