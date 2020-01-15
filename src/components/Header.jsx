import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Logo from '../images/realworld.png';
import * as actions from '../actions/actions';

const Header = ({ isAuthorized, clear }) => {
  const NavBar = isAuthorized ? (
    <div className="header__right">
      <NavLink to="/">
        <Button type="primary">Главная</Button>
      </NavLink>
    </div>
  ) : (
    <div className="header__right">
      <NavLink to="/login" onClick={clear}>
        <Button type="primary">Войти</Button>
      </NavLink>
      <NavLink to="/signup" onClick={clear}>
        <Button type="danger">Зарегистрироваться</Button>
      </NavLink>
    </div>
  );
  return (
    <header className="header">
      <div className="header__left">
        <NavLink to="/">
          <img className="header__logo" src={Logo} alt="Логотип RealWorld" />
        </NavLink>
      </div>
      {NavBar}
    </header>
  );
};

Header.defaultProps = {
  isAuthorized: null,
  clear: null,
};

Header.propTypes = {
  isAuthorized: PropTypes.bool,
  clear: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    isAuthorized: state.user.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  const { clear } = bindActionCreators(actions, dispatch);
  return {
    clear,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
