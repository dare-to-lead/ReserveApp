// reducers/dataReducer.js

import {
  POST_TICKETBOOKING_REQUEST,
  POST_TICKETBOOKING_SUCCESS,
  POST_TICKETBOOKING_FAILURE,
} from "../actionType";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const ticketBookinReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TICKETBOOKING_REQUEST:
      return { ...state, loading: true };
    case POST_TICKETBOOKING_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case POST_TICKETBOOKING_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default ticketBookinReducer;
