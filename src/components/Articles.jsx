import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const Articles = ({ articles }) => {
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
        return <Article key={newIndex} {...props} />;
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
