import {
  POST_TICKETBOOKING_REQUEST,
  POST_TICKETBOOKING_SUCCESS,
  POST_TICKETBOOKING_FAILURE,
  ADD_TRIP_INFO,
} from "../actionType";
import axios from "axios";

export const postTicketDetails = (payload) => {
  return async (dispatch) => {
    dispatch({ type: POST_TICKETBOOKING_REQUEST });

    try {
      const response = await axios.post(
        `http://localhost:8080/redbus/book-ticket`,
        payload
      );

      // console.log("Trips API testing", response.data);

      dispatch({
        type: POST_TICKETBOOKING_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      const errorMsg = error.message;
      dispatch({
        type: POST_TICKETBOOKING_FAILURE,
        payload: errorMsg,
      });
    }
  };
};

export const tripInfo = (payload) => {
  return { type: ADD_TRIP_INFO, payload };
};
