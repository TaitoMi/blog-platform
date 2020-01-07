import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';
import PropTypes from 'prop-types';

const Article = ({
  title,
  body,
  favoritesCount,
  author,
  createdAt,
  favorited,
  tagList,
  isAuthorized,
  redirect,
}) => {
  const isLike = favorited ? 'dislike' : 'like';
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div onClick={redirect} onKeyUp={redirect} role="article" className="articles__item article">
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
            <Button
              className="article__likeBtn"
              onClick={event => {
                console.log('like');
                event.stopPropagation();
              }}
              icon={isLike}
            >
              {isLike}
            </Button>
          ) : null}
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
  redirect: null,
};

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  favoritesCount: PropTypes.number,
  createdAt: PropTypes.string,
  favorited: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  author: PropTypes.objectOf(PropTypes.string),
  tagList: PropTypes.arrayOf(PropTypes.string),
  redirect: PropTypes.func,
};

const mapStateToProps = state => ({ isAuthorized: state.user.isAuthorized });

export default connect(mapStateToProps)(Article);
