import {
  FETCH_TRIPS_REQUEST,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAILURE,
} from "../actionType";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRIPS_REQUEST:
      return { ...state, loading: true };
    case FETCH_TRIPS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_TRIPS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default tripReducer;
