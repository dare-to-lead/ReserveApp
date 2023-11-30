// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; // For async action handling
import tripReducer from "./redux/reducers/tripReducer";
import districtReducer from "./redux/reducers/districtReducer";

const rootReducer = combineReducers({
  data: tripReducer,
  districtsData: districtReducer,

  // Other reducers can be added here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
