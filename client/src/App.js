import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Filter from "./components/availableTrips/Filter";
import { useEffect } from "react";
import { fetchTrips } from "./redux/actions/getApiFetch";

function App() {
  const [filters, setFilters] = useState({});
  const data = useSelector((state) => state.data);
  console.log("d", data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, []);
  // console.log(response);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setFilters={setFilters} />} />
          <Route
            path="/trips"
            element={<Filter data={data} filters={filters} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
