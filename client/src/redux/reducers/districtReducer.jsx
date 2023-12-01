// reducers/dataReducer.js

import {
  FETCH_DISTRICTS_REQUEST,
  FETCH_DISTRICTS_SUCCESS,
  FETCH_DISTRICTS_FAILURE,
} from "../actionType";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const districtReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISTRICTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_DISTRICTS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_DISTRICTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default districtReducer;
