import * as actions from './policyAction';

const initialState = {
  policyData: {
    name: '',
    finalPrice: 0,
    eligibility: null
  },
  policyError: ''
};

const newPolicy = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_POLICY':
      return {
        ...state,
        policyData: { 
          name: action.data.user.firstName,
          finalPrice: action.data.newPolicy.policyCost,
          eligibility: action.data.newPolicy.eligibility
        }
      }
    case 'POLICY_ERROR':
      return {
        ...state,
        policyError: action.error
      }
    default:
      return state;
  }
}

export default newPolicy;
