import { combineReducers } from 'redux';

const initialState = {
  email: '',
  username: '',
  password: '',
  isRegSuccessful: '',
  error: null,
};

const userForm = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'USER_REGISTERED':
      return { ...state, isRegSuccessful: payload.reg };
    case 'REG_ERROR':
      return { ...state, error: payload.error };
    default:
      return state;
  }
};

export default combineReducers({ user: userForm });
