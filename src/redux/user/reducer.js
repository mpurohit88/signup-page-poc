import { USER_PROFILE_SAVE } from './action';

function profile(state = {}, action) {
  switch (action.type) {
    case USER_PROFILE_SAVE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
}

export default profile;