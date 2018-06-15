const CHANGE_AUTH = 'change_auth';

function authenticationReducer(state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}

export default authenticationReducer;

export function authenticate(isLoggedIn) {
  return { type: CHANGE_AUTH, payload: isLoggedIn };
}
