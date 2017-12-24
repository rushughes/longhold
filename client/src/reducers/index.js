import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import ICOsReducer from './ICOsReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  icos: ICOsReducer,
});
