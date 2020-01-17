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
    this.asyncDidMount();
  }

  asyncDidMount = async () => {
    const { getArticles, token, login } = this.props;
    const { currentPage } = this.state;
    const checkStorage = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null;
    if (checkStorage) {
      await login({ password: checkStorage.password, email: checkStorage.email });
    }
    const checkAuthorization = token || null;
    getArticles(checkAuthorization, currentPage);
  };

  pageHandler = page => {
    const { getArticles, token } = this.props;
    const checkAuthorization = token || null;
    getArticles(checkAuthorization, page);
    this.setState({ currentPage: page });
  };

  render() {
    const { id, email, username, exit, articles, articlesCount, token } = this.props;
    const { currentPage } = this.state;

    return (
      <>
        <Pagination
          defaultCurrent={1}
          onChange={this.pageHandler}
          current={currentPage}
          pageSize={10}
          total={articlesCount}
        />
        <main className="container">
          {token ? (
            <aside className="user">
              <div className="user__info">
                <div className="user__row">
                  {username} #{id}
                </div>
                <div className="user__row">{email}</div>
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
          ) : null}
          <Articles articles={articles} />
        </main>
        <Pagination
          defaultCurrent={1}
          onChange={this.pageHandler}
          current={currentPage}
          pageSize={10}
          total={articlesCount}
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
  articlesCount: null,
  login: null,
};

MainPage.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  username: PropTypes.string,
  exit: PropTypes.func,
  getArticles: PropTypes.func,
  token: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.object),
  articlesCount: PropTypes.number,
  login: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    id: state.user.id,
    email: state.user.email,
    username: state.user.username,
    token: state.user.token,
    articles: state.articles.articles,
    articlesCount: state.articles.articlesCount,
  };
};

const mapDispatchToProps = dispatch => {
  const { exit, getArticles, login } = bindActionCreators(actions, dispatch);
  return {
    exit,
    getArticles,
    login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
