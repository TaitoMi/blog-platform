import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../actions/actions';

const Article = ({
  title,
  body,
  favoritesCount,
  author,
  createdAt,
  favorited,
  tagList,
  isAuthorized,
  likeOrDislike,
  slug,
  token,
}) => {
  const isLike = favorited ? 'dislike' : 'like';
  const likeHandler = event => {
    event.stopPropagation();
    likeOrDislike(favorited, slug, token);
  };

  return (
    <div className="articles__item article">
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
            <Button className="article__like-btn" onClick={likeHandler} icon={isLike}>
              {isLike}
            </Button>
          ) : (
            'Likes '
          )}
          {favoritesCount}
        </div>
        <NavLink to={`/articles/${slug}`}>
          <Button type="normal">Подробнее</Button>
        </NavLink>
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
    </div>
  );
};

Article.defaultProps = {
  title: '',
  body: '',
  favoritesCount: 0,
  createdAt: '',
  favorited: null,
  isAuthorized: null,
  author: null,
  tagList: [],
  likeOrDislike: null,
  slug: '',
  token: '',
};

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  favoritesCount: PropTypes.number,
  createdAt: PropTypes.string,
  favorited: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  author: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])),
  tagList: PropTypes.arrayOf(PropTypes.string),
  likeOrDislike: PropTypes.func,
  slug: PropTypes.string,
  token: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    isAuthorized: state.user.isAuthorized,
    token: state.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  const { likeOrDislike } = bindActionCreators(actions, dispatch);
  return {
    likeOrDislike,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
