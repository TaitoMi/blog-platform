/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
import Logo from '../images/realworld.png';

const Header = ({ isAuthorized }) => {
  const NavBar = isAuthorized ? (
    <div className="header__right">
      <NavLink to="/">
        <Button type="primary">Личный кабинет</Button>
      </NavLink>
    </div>
  ) : (
    <div className="header__right">
      <NavLink to="/login">
        <Button type="primary">Войти</Button>
      </NavLink>
      <NavLink to="/signup">
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

const mapStateToProps = state => {
  return {
    isAuthorized: state.user.isAuthorized,
  };
};

export default connect(mapStateToProps)(Header);
