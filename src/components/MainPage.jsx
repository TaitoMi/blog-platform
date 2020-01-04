import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../actions/actions';

const MainPage = ({ id, email, username, exit }) => {
  return (
    <form className="user" onSubmit={exit}>
      <div className="user__info">
        <div className="user__row">id: {id}</div>
        <div className="user__row">email: {email}</div>
        <div className="user__row">username: {username}</div>
      </div>
      <NavLink to="/add">
        <Button type="primary">Создать страницу</Button>
      </NavLink>
      <Button htmlType="submit" className="user__btn" type="danger">
        Выход
      </Button>
    </form>
  );
};

MainPage.defaultProps = {
  id: '',
  email: '',
  username: '',
  exit: null,
};

MainPage.propTypes = {
  id: PropTypes.string,
  email: PropTypes.string,
  username: PropTypes.string,
  exit: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    id: state.user.id,
    email: state.user.email,
    username: state.user.username,
  };
};

const mapDispatchToProps = dispatch => {
  const { exit } = bindActionCreators(actions, dispatch);
  return {
    exit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
