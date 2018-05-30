const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    company: {},
    editing: false
  }
};

const EDIT_USER = 'EDIT_USER';

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case EDIT_USER:
      return state.map( user => user.id === action.id ? {...user, editing:!user.editing}:user)
    default:
      return state;
  }
}

export default userReducer; 

export const editUser = id => {
  return { type: EDIT_USER, payload: id};
}
