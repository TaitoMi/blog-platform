import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Pagination } from 'antd';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../actions/actions';
import Articles from './Articles';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  componentDidMount() {
    const { getArticles, token } = this.props;
    getArticles(token);
  }

  pageHandler = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { id, email, username, exit, articles } = this.props;
    const { currentPage } = this.state;
    const from = currentPage * 10 - 10;
    const to = currentPage * 10 - 1;
    const articlesPart = articles.slice(from, to);
    return (
      <>
        <Pagination
          defaultCurrent={1}
          onChange={this.pageHandler}
          current={currentPage}
          pageSize={10}
          total={articles.length}
        />
        <main className="container">
          <aside className="user">
            <div className="user__info">
              <div className="user__row">id: {id}</div>
              <div className="user__row">email: {email}</div>
              <div className="user__row">username: {username}</div>
            </div>
            <div className="user__buttons">
              <NavLink to="/add">
                <Button type="primary">Создать страницу</Button>
              </NavLink>
              <Button htmlType="button" onClick={exit} className="user__btn" type="danger">
                Выход
              </Button>
            </div>
          </aside>
          <Articles articles={articlesPart} />
        </main>
        <Pagination
          defaultCurrent={1}
          onChange={this.pageHandler}
          current={currentPage}
          pageSize={10}
          total={articles.length}
        />
      </>
    );
  }
}

MainPage.defaultProps = {
  id: null,
  email: '',
  username: '',
  exit: null,
  getArticles: null,
  articles: [],
  token: '',
};

MainPage.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  username: PropTypes.string,
  exit: PropTypes.func,
  getArticles: PropTypes.func,
  articles: PropTypes.arrayOf(PropTypes.object),
  token: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    id: state.user.id,
    email: state.user.email,
    username: state.user.username,
    token: state.user.token,
    articles: state.articles.articles,
  };
};

const mapDispatchToProps = dispatch => {
  const { exit, getArticles } = bindActionCreators(actions, dispatch);
  return {
    exit,
    getArticles,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
