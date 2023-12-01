import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Trips from "./components/availableTrips/Trips";

function App() {
  // console.log("d", data);

  // console.log(response);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trips" element={<Trips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
