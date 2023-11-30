import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllDistrictsName } from "../../redux/actions/getDistrictApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrips } from "../../redux/actions/getApiFetch";

// export default function Form() {
//   const [arr, setArr] = useState([
//     { name: "mumbai", id: 1 },
//     { name: "muhaha", id: 2 },
//     { name: "muddhd", id: 3 },
//     { name: "puna", id: 4 },
//     { name: "panvel", id: 5 },
//     { name: "rajas", id: 6 },
//     { name: "rajeshpur", id: 7 },
//     { name: "ravind", id: 8 },
//   ]);
//   const [filterFromArray, setFilterFromArray] = useState([]);
//   const [filterToArray, setFilterToArray] = useState([]);
//   const [pform, setPForm] = useState({
//     from: "",
//     to: "",
//   });
//   const [form, setForm] = useState({
//     from: "",
//     to: "",
//   });

//   function handleFromChange(e) {
//     const filterData = arr.filter((item) => item.name.includes(e.target.value));
//     setFilterFromArray(filterData);
//     setForm((prev) => ({
//       ...prev,
//       from: e.target.value,
//     }));
//   }

//   function handleToChange(e) {
//     const filterData = arr.filter((item) => item.name.includes(e.target.value));
//     setFilterToArray(filterData);
//     setForm((prev) => ({
//       ...prev,
//       to: e.target.value,
//     }));
//   }

//   function handleFromClick(item) {
//     setPForm((prev) => ({
//       ...prev,
//       from: item,
//     }));
//   }

//   function handleToClick(item) {
//     setPForm((prev) => ({
//       ...prev,
//       to: item,
//     }));
//   }
//   function handleClickSubmit() {
//     const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//     dispatch(gettripdata(pform));
//   }
//   return (
//     <>
//       <label>
//         From:
//         <input value={form.from} onChange={(e) => handleFromChange(e)} />
//       </label>
//       <ul>
//         {filterFromArray.length > 0 &&
//           filterFromArray.map((item, index) => {
//             return (
//               <li key={index} onClick={() => handleFromClick(item.id)}>
//                 {item.name}
//               </li>
//             );
//           })}
//       </ul>
//       <label>
//         to:
//         <input value={form.to} onChange={(e) => handleToChange(e)} />
//       </label>
//       <ul>
//         {filterToArray.length > 0 &&
//           filterToArray.map((item, index) => {
//             return (
//               <li key={index} onClick={() => handleToClick(item.id)}>
//                 {item.name}
//               </li>
//             );
//           })}
//       </ul>

//       <button onClick={handleClickSubmit}>submit</button>
//     </>
//   );
// }

const TripFindingForm = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);
  const [date, setDate] = useState("");
  const [nameForm, setNameForm] = useState({
    from: "",
    to: "",
  });
  const [idForm, setIdForm] = useState({
    from: "",
    to: "",
  });

  console.log("name", nameForm);
  console.log("id", idForm);

  const data = useSelector((state) => state.districtsData);
  const tripdata = useSelector((state) => state.data);
  const result = data.data;
  // const flatten = result?.flatMap((items) => items);

  // console.log("data", flatten);
  const dispatch = useDispatch();

  function handleOriginChange(e) {
    e.preventDefault();

    const inputValue = e.target.value.trim();

    if (inputValue === "" || inputValue === null) {
      setOrigin([]);
    } else {
      const flatten = result?.flatMap((items) => items);
      const filter = flatten?.filter((hg) =>
        hg.name.toLowerCase().includes(inputValue.toLowerCase())
      );

      setOrigin(filter);
    }
    setNameForm((prev) => ({
      ...prev,
      from: inputValue,
    }));
  }

  function handleDestinationChange(e) {
    e.preventDefault();
    const inputValue = e.target.value.trim();
    if (inputValue === "" || inputValue === null) {
      setDestination([]);
    } else {
      const flatten = result?.flatMap((items) => items);
      const filter = flatten?.filter((hg) =>
        hg.name.toLowerCase().includes(inputValue.toLowerCase())
      );

      setDestination(filter);
    }
    setNameForm((prev) => ({
      ...prev,
      to: inputValue,
    }));
  }

  function handleOriginClick(item) {
    setIdForm((prev) => ({
      ...prev,
      from: item._id,
    }));
    setNameForm((prev) => ({
      ...prev,
      from: item.name,
    }));

    setOrigin([]);
  }

  function handleDestinationClick(item) {
    setIdForm((prev) => ({
      ...prev,
      to: item._id,
    }));
    setNameForm((prev) => ({
      ...prev,
      to: item.name,
    }));

    setDestination([]);
  }

  function handleClickSubmit() {
    console.log("Submitting form with the following data:");
    console.log("Origin:", nameForm.from, "ID:", idForm.from);
    console.log("Destination:", nameForm.to, "ID:", idForm.to);

    const queryString = new URLSearchParams(idForm).toString();
    console.log("query", queryString);

    dispatch(fetchTrips(queryString));
    console.log("trip", tripdata);

    navigate("/trips");
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAllDistrictsName());
    }, 200);
  }, [nameForm]);

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
              value={nameForm.from}
              onChange={(e) => handleOriginChange(e)}
              className="form-control"
              aria-label="Text input with dropdown button"
              style={{
                backgroundColor: "rgb(152, 180, 187)",
                borderTop: "3px solid rgb(202, 112, 7)",
              }}
            />
          </div>
          <ul className="bg-light">
            {origin.length > 0 &&
              origin.map((item, index) => {
                return (
                  <li key={index} onClick={() => handleOriginClick(item)}>
                    {item.name}
                  </li>
                );
              })}
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
              onChange={(e) => handleDestinationChange(e)}
              value={nameForm.to}
              className="form-control"
              aria-label="Text input with dropdown button"
              style={{
                backgroundColor: "rgb(152, 180, 187)",
                borderTop: "3px solid rgb(202, 112, 7)",
              }}
            />
          </div>
          <ul className="bg-light w-25 h-auto">
            {destination.length > 0 &&
              destination.map((item, index) => {
                return (
                  <li
                    className="drop-dropdown-item"
                    key={index}
                    onClick={() => handleDestinationClick(item)}>
                    {item.name}
                  </li>
                );
              })}
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
            onClick={handleClickSubmit}>
            Search Trips
          </button>
        </div>
      </form>
    </div>
  );
};

export default TripFindingForm;
