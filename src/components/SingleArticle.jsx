import React from 'react';
import { Button } from 'antd';
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../actions/actions';

const SingleArticle = ({ articles, isAuthorized, slug, likeOrDislike, token, currUser }) => {
  const article = articles.filter(el => el.slug === slug)[0];
  const {
    title,
    body,
    favoritesCount,
    author,
    createdAt,
    favorited,
    tagList,
    author: { username },
  } = article;
  const isLike = favorited ? 'dislike' : 'like';

  const likeHandler = () => likeOrDislike(favorited, slug, token);
  return (
    <article>
      {isAuthorized && currUser === username ? (
        <NavLink to={`/articles/${slug}/edit`}>
          <Button type="normal">Редактировать</Button>
        </NavLink>
      ) : null}
      <h1 className="article__title">{title}</h1>
      <div className="article__body">{body}</div>
      {tagList.length > 0 ? (
        <div className="article__tags">
          {tagList.map((tag, i) => {
            const newIndex = `tag-${i}`;
            return (
              <span key={newIndex} className="article__tag">
                {tag}
              </span>
            );
          })}
        </div>
      ) : null}
      <div className="article__meta">
        <div className="article__likes">
          {isAuthorized ? (
            <Button className="article__likeBtn" onClick={likeHandler} icon={isLike}>
              {isLike}
            </Button>
          ) : (
            'Likes '
          )}
          {favoritesCount}
        </div>
        <div className="article__created">
          <span className="article__author">Автор: {author.username}</span>
          <span className="article__date">
            {'Создано:  '}
            {formatDistance(new Date(createdAt), new Date(), {
              locale: ru,
            })}{' '}
            назад
          </span>
        </div>
      </div>
    </article>
  );
};

SingleArticle.defaultProps = {
  articles: [],
  isAuthorized: null,
  slug: '',
  likeOrDislike: null,
  token: '',
  currUser: '',
};

SingleArticle.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  isAuthorized: PropTypes.bool,
  slug: PropTypes.string,
  likeOrDislike: PropTypes.func,
  token: PropTypes.string,
  currUser: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    articles: state.articles.articles,
    isAuthorized: state.user.isAuthorized,
    token: state.user.token,
    currUser: state.user.username,
  };
};

const mapDispatchToProps = dispatch => {
  const { likeOrDislike } = bindActionCreators(actions, dispatch);
  return {
    likeOrDislike,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle);
