import { SIGN_IN, SIGN_OUT } from './action';

function signIn(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
}

export default signIn;