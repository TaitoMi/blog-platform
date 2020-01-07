import React from 'react';
import { Button } from 'antd';
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SingleArticle = ({ articles, isAuthorized, slug }) => {
  const article = articles.filter(el => el.slug === slug)[0];
  const { title, body, favoritesCount, author, createdAt, favorited, tagList } = article;
  const isLike = favorited ? 'dislike' : 'like';

  const like = () => {
    console.log('ku');
  };

  return (
    <article>
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
            <Button className="article__likeBtn" onClick={like} icon={isLike}>
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
    </article>
  );
};

SingleArticle.defaultProps = {
  articles: [],
  isAuthorized: null,
  slug: '',
};

SingleArticle.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  isAuthorized: PropTypes.bool,
  slug: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    articles: state.articles.articles,
    isAuthorized: state.user.isAuthorized,
  };
};

export default connect(mapStateToProps)(SingleArticle);
