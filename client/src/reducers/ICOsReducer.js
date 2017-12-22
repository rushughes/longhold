import { FETCH_ICOS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ICOS:
      return action.payload;
    default:
      return state;
  }
}
