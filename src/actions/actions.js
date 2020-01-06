import registration from './registration';
import login from './login';
import createArticle from './createArticle';
import getArticles from './getArticles';

export { registration, login, createArticle, getArticles };

export const clear = () => ({ type: 'ERROR_CLEAR' });

export const exit = () => ({ type: 'LOGIN_EXIT' });
