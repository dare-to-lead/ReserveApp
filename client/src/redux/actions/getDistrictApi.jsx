import {
  FETCH_DISTRICTS_REQUEST,
  FETCH_DISTRICTS_SUCCESS,
  FETCH_DISTRICTS_FAILURE,
} from "../actionType";

export const fetchAllDistrictsName = (inputValue) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DISTRICTS_REQUEST });

    try {
      const response = await fetch(
        `http://localhost:8080/redbus/stateDistricts?query=${inputValue}`
      );
      const data = await response.json();

      console.log("Districts API testing", data);

      dispatch({
        type: FETCH_DISTRICTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const errorMsg = error.message;
      dispatch({
        type: FETCH_DISTRICTS_FAILURE,
        payload: errorMsg,
      });
    }
  };
};
