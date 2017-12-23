import { FETCH_ICOS, FETCH_ICO } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ICOS:
      return action.payload;
    case FETCH_ICO:
      return action.payload[0];
    default:
      return state;
  }
}
