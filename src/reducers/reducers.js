import { combineReducers } from 'redux';

const initialState = {
  isSuccessful: null,
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
    case 'USER_LOGIN':
      return { ...state, ...payload.user, isAuthorized: true };
    case 'LOGIN_ERROR':
      return { ...state, error: true };
    case 'LOGIN_EXIT':
      return { ...initialState };
    default:
      return state;
  }
};

export default combineReducers({ user: userForm });
