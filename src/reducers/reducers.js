import { combineReducers } from 'redux';

const initialState = {
  email: '',
  username: '',
  password: '',
  isSuccessful: '',
  error: null,
  isAuthorized: null,
};

const userForm = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'USER_REGISTERED':
      return { ...state, isSuccessful: payload.reg, error: null };
    case 'REG_ERROR':
      return { ...state, isSuccessful: null, error: payload.error };
    default:
      return state;
  }
};

export default combineReducers({ user: userForm });
