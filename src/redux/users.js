import { database } from './../firebase';
const usersRef = database.ref('users/');

const initialState = {
  users: [],
  user: {
    name: '',
    email: '',
    company: {
      name: ''
    },
    editing: false
  }
};

const SET_USERS   = 'SET_USERS';
const UPDATE_USER = 'UPDATE_USER'; //WIP
const ADD_USER    = 'ADD_USER';
const EDIT_USER   = 'EDIT_USER'; //toggles state of edit
const DELETE_USER = 'DELETE_USER';
const CLEAR_USER  = 'CLEAR_USER';//WIP to clear Add User form inputs after "ADD_USER"

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERS:
      return { 
        ...state, 
        users: action.payload
      };
    case EDIT_USER:
      return state.map( user => user.id === action.id ? user: {...user, editing:!user.editing});
    case ADD_USER:
      // state.users is array of all users and action.payload is new user object
      return { 
        ...state, 
        users: [...state.users, action.payload]
      };
    case DELETE_USER:
      return { 
        ...state,
        //return all users except where user matches action.payload
        users: state.users.filter(user => user != action.payload)
        };
    case CLEAR_USER:
      return { 
        ...state, 
        user: initialState
      };
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
      //.then(results => { 
      //  dispatch(setUsers(results));
      //})
      .then( usersRef.on("value", snapshot => {
        dispatch(setUsers(snapshot.val()));
      }));
  }
}

export const createUser = user => {
  //Could just use "addUser" in component but this works too
  return (dispatch) => {
    //dispatch(addUser(user));
    usersRef.on('value', (snapshot) => {
      dispatch(addUser(snapshot.val()));
    });
  //usersRef.push().set(user);
  };
}


export const setUsers = users => {
  return {type: SET_USERS, payload: users};
}

export const updateUser = user => {
  return {type: UPDATE_USER, payload: user};
}

export const addUser = user => {
  return {type: ADD_USER, payload: user};
}

export const deleteUser = user => {
  return {type: DELETE_USER, payload: user};
}

export const clearUser = () => {
  return {type: CLEAR_USER };
}

export const editUser = id => {
  return {type: EDIT_USER, payload: id};
}
