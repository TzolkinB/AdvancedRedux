
const SET_USERS = 'SET_USERS';

function userReducer(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return [ ...state, ...action.payload.data];
    default:
      return state;
  }
}

export default userReducer; 

export const fetchUsers = () => {
  console.log('here');
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => 
        console.log('json', json)
      )
  }
}

export const setUsers = users => {
  return { type: SET_USERS, payload: users};
}
