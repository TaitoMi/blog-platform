import registration from './registration';
import login from './login';
import createArticle from './createArticle';
import getArticles from './getArticles';
import likeOrDislike from './like';
import updateArticle from './updateArticle';

export { registration, login, createArticle, getArticles, likeOrDislike, updateArticle };

export const clear = () => ({ type: 'ERROR_CLEAR' });

export const exit = () => ({ type: 'LOGIN_EXIT' });
