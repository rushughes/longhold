import axios from 'axios';
import { FETCH_USER, FETCH_ICOS, FETCH_ICO } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitICO = (values, history) => async dispatch => {
  const res = await axios.post('/api/icos', values);

  history.push('/icos');
  dispatch({ type: FETCH_ICOS, payload: res.data });
};

export const fetchICOs = () => async dispatch => {
  const res = await axios.get('/api/icos');

  dispatch({ type: FETCH_ICOS, payload: res.data });
};

export const fetchICO = (id) => async dispatch => {
  const res = await axios.get(`/api/icos/${id}`);

  dispatch({ type: FETCH_ICO, payload: res.data });
};

export const createICO = (values, history) => async dispatch => {
  const res = await axios.post('/api/icos', values);
  dispatch({ type: FETCH_USER, payload: res.data });
  history.push('/icos');
};

export const updateICO = (values, history) => async dispatch => {
  const res = await axios.put(`/api/icos`, values);
  dispatch({ type: FETCH_ICOS, payload: res.data });
  history.push('/icos');
};
