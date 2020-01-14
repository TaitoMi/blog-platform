import React from 'react';
import 'normalize.css';
import 'antd/dist/antd.css';
import './styles/styles.scss';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header';
import MainPage from './components/MainPage';
import CreateArticle from './components/CreateArticle';
import SingleArticle from './components/SingleArticle';
import ArticleEdit from './components/ArticleEdit';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/add" component={CreateArticle} />
          <Route
            path="/articles/:slug"
            render={propses => {
              const { params, path } = propses.match;
              return (
                <Switch>
                  <Route exact path={`${path}/`}>
                    <SingleArticle {...params} />
                  </Route>
                  <Route path={`${path}/edit`}>
                    <ArticleEdit {...params} />
                  </Route>
                </Switch>
              );
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

App.defaultProps = {
  isAuthorized: null,
};

App.propTypes = {
  isAuthorized: PropTypes.bool,
};

const mapStateToProps = state => ({ isAuthorized: state.user.isAuthorized });

export default connect(mapStateToProps)(App);
