import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/realworld.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <NavLink to="/">
          <img className="header__logo" src={Logo} alt="Логотип RealWorld" />
        </NavLink>
      </div>
      <div className="header__right">
        <NavLink to="/login">
          <Button className="header__button" type="primary">
            Login
          </Button>
        </NavLink>
        <NavLink to="/signup">
          <Button className="header__button" type="danger">
            Registration
          </Button>
        </NavLink>
      </div>
    </header>
  );
};

export default connect()(Header);
