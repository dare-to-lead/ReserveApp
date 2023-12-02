import { ADD_TRIP_INFO } from "../actionType";

const initialState = {};

export function tripDetail(state = initialState, action) {
  switch (action.type) {
    case ADD_TRIP_INFO:
      return action.payload;

    default:
      return state;
  }
}
