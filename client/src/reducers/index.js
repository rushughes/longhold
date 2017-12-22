import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import ICOsReducer from './ICOsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  icos: ICOsReducer,
});
