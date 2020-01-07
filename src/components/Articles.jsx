import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Article from './Article';

const Articles = ({ articles }) => {
  const history = useHistory();

  const goToArticle = slug => () => {
    history.push(`/articles/${slug}`);
  };

  return (
    <div className="articles">
      {articles.map((el, i) => {
        const newIndex = `article-${i}`;
        const props = {
          title: el.title,
          slug: el.slug,
          body: el.body,
          createdAt: el.createdAt,
          updatedAt: el.updatedAt,
          tagList: el.tagList,
          description: el.description,
          author: el.author,
          favorited: el.favorited,
          favoritesCount: el.favoritesCount,
        };
        return <Article redirect={goToArticle(el.slug)} key={newIndex} {...props} />;
      })}
    </div>
  );
};

Articles.defaultProps = {
  articles: [],
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};

export default Articles;
