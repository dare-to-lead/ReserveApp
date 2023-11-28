import axios from "axios";
import {
  FETCH_TRIPS_REQUEST,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAILURE,
} from "../actionType";

export const fetchTrips = (filters) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TRIPS_REQUEST });

    try {
      const response = await axios.get(`http://localhost:8080/redbus/trips`, {
        params: filters,
      });

      console.log("Trips API testing", response.data);

      dispatch({
        type: FETCH_TRIPS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      const errorMsg = error.message;
      dispatch({
        type: FETCH_TRIPS_FAILURE,
        payload: errorMsg,
      });
    }
  };
};
