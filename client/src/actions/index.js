import axios from 'axios';
import { FETCH_USER, FETCH_ICOS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitICO = (values, history) => async dispatch => {
  const res = await axios.post('/api/icos', values);

  history.push('/icos');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchICOs = () => async dispatch => {
  const res = await axios.get('/api/icos');

  dispatch({ type: FETCH_ICOS, payload: res.data });
};
