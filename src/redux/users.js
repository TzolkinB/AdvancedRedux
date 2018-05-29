const initialState = {
  all: [],
  user: {
    id: null,
    name: '',
    email: ''
  }
};

const SET_USERS = 'SET_USERS';
const UPDATE_USER = 'UPDATE_USER';

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, all: action.payload};
    case UPDATE_USER:
      return state.map(user => {
        if(user.id === action.payload.id) {
          return action.payload;
        }
        return person;
      });
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
        dispatch(setUsers(json));
        return json;
      })
  }
}

export const setUsers = users => {
  return {type: SET_USERS, payload: users};
}

export const updateUser = user => {
  return {type: UPDATE_USER, payload: user};
}
