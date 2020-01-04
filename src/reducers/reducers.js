import { combineReducers } from 'redux';
import userForm from './userForm';
import articles from './articles';

export default combineReducers({ user: userForm, articles });
