import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Filter from "./components/availableTrips/Filter";

function App() {
  // console.log("d", data);

  // console.log(response);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trips" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
