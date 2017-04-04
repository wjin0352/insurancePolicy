import axios from 'axios';
import { browserHistory } from 'react-router';

export function createPolicy(data) {
  console.log('DATA ====', data);

  return (dispatch) => {
    console.log('data ', data)
    axios.post('/api/users', data)
      .then(response => {
        console.log('action RESPONSE!!!!!!! ', response);
        return dispatch(policySuccess(response.data));
      })
      .catch(err => {
        console.log('ERROR!!!!!', err)
        return dispatch(policyError(err));
      })
  };  
}
export function policySuccess(data) {
  return {
    type: 'CREATE_POLICY',
    data
  };
}

export function policyError(error) {
  return {
    type: 'POLICY_ERROR',
    error
  };
}
