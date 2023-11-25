// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; // For async action handling
import dataReducer from "./redux/reducers/tripReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  // Other reducers can be added here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
