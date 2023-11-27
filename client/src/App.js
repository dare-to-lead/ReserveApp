import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Filter from "./components/availableTrips/Filter";
import { useEffect } from "react";
import { fetchData } from "./redux/actions/getApiFetch";

function App() {
  const data = useSelector((state) => state.data);
  console.log("d", data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  // console.log(response);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trips" element={<Filter data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
