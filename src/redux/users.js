import axios from 'axios';

const FETCH_USERS = 'FETCH_USERS';

function userReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return [ ...state, ...action.payload.data];
    default:
      return state;
  }
}

export default userReducer; 

export const fetchUsers = () => {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  return { type: FETCH_USERS, payload: request};
}
