import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import HomePage from "./pages/HomePage";
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
      <HomePage />
    </div>
  );
}

export default App;
