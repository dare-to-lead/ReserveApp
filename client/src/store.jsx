// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; // For async action handling
import tripReducer from "./redux/reducers/tripReducer";
import districtReducer from "./redux/reducers/districtReducer";
import ticketBookinReducer from "./redux/reducers/ticketBookingReducer";
import { tripDetail } from "./redux/reducers/ticketTripReducer";

const rootReducer = combineReducers({
  data: tripReducer,
  districtsData: districtReducer,
  ticketBooking: ticketBookinReducer,
  ticketTripDetail: tripDetail,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
