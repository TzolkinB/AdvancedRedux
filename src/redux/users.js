const initialState = {
  all: []
};

const SET_USERS = 'SET_USERS';

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, all: action.payload};
    default:
      return state;
  }
}

export default usersReducer; 

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
