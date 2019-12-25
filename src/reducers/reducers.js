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
      newState.email = action.payload.email;
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ user: userForm });
