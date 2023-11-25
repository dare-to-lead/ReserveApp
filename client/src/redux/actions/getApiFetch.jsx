import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../actionType";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      const response = await fetch(
        `http://localhost:8080/redbus/trips`
        /*,{ "trip":"655884c8b099c56258d0104a",
        "passengerName":"Anjum",
        "seatNumber":5,
        "contactNumber": 9876543239,
        "email":"nhz@kjf.com"}*/
      );
      const data = await response.json();

      console.log("api testing", data);

      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const errorMsg = error.message;
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload: errorMsg,
      });
    }
  };
};
