import { SIGN_IN } from './action';

function signIn(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    default:
      return state;
  }
}

export default signIn;