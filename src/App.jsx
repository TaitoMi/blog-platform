import React from 'react';
import 'normalize.css';
import 'antd/dist/antd.css';
import './styles/styles.scss';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header';
import MainPage from './components/MainPage';
import CreateArticle from './components/CreateArticle';

const App = props => {
  const { isAuthorized } = props;
  const render = () => (!isAuthorized ? <Redirect to="/login" /> : <MainPage />);
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/" render={render} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/add" component={CreateArticle} />
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
