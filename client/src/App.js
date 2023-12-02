import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Trips from "./components/availableTrips/Trips";
import CustomerInfo from "./pages/CustomerDetailPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  // console.log("d", data);

  // console.log(response);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/CustomerDetails" element={<CustomerInfo />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
