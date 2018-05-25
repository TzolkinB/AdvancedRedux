const initialState = {
  all: []
};

const SET_USERS = 'SET_USERS';
const SET_UPDATE = 'SET_UPDATE';
const EDIT_USER = 'EDIT_USER';

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, all: action.payload};
    case EDIT_USER:
      return { ...state, 
    default:
      return state;
  }
}

export default userReducer; 

export const fetchUsers = () => {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => { 
        console.log('json', json);
        dispatch(setUsers(json));
        return json;
      })
  }
}

export const setUsers = users => {
  return { type: SET_USERS, payload: users};
}
