import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import Article from './Article';

const Articles = ({ articles }) => {
  return (
    <div className="articles">
      {articles.length === 0 ? <Spin tip="Loading..." /> : null}
      {articles.map(el => {
        return <Article key={el.slug} {...el} />;
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
