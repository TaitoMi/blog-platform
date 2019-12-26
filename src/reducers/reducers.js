import { combineReducers } from 'redux';

const initialState = {
  email: '',
  username: '',
  password: '',
};

const userForm = (state = initialState, action) => {
  const newState = state;
  switch (action.type) {
    case 'EMAIL_INPUT':
      newState.email = action.payload.text;
      console.log(typeof newState.email);
      return newState;
    case 'USERNAME_INPUT':
      newState.username = action.payload.text;
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ user: userForm });
