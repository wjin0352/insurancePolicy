import { combineReducers } from 'redux';
import newPolicy from '../modules/createPolicy/policyReducer';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  newPolicy,
  routing: routerReducer,
  form: formReducer 
});

export default rootReducer;
