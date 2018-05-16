import fetch from 'isomorphic-fetch';
import tableData from './../data/audit-intents.json';

const initialState = {
  all: []
};

const SET_COUNTIES = 'SET_COUNTIES';

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COUNTIES:
      return { ...state, all: action.payload};
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

export const setUsers = () => {
  return { type: SET_COUNTIES, payload: tableData};
}
