import registration from './registration';
import login from './login';
import createArticle from './createArticle';

export { registration, login, createArticle };

export const clear = () => ({ type: 'ERROR_CLEAR' });

export const exit = () => ({ type: 'LOGIN_EXIT' });
