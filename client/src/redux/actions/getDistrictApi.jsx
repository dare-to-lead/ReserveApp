import {
  FETCH_DISTRICTS_REQUEST,
  FETCH_DISTRICTS_SUCCESS,
  FETCH_DISTRICTS_FAILURE,
} from "../actionType";

export const fetchAllDistrictsName = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DISTRICTS_REQUEST });

    try {
      const response = await fetch(
        `http://localhost:8080/redbus/stateDistricts`
      );
      const data = await response.json();
      let result = data.map((items) => items.districts);

      console.log("Districts API testing", result);

      dispatch({
        type: FETCH_DISTRICTS_SUCCESS,
        payload: result,
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
