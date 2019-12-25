import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: '111',
    };
  }

  logIn = event => {
    event.preventDefault();
  };

  render() {
    const { something } = this.state;
    return (
      <form className="form" onSubmit={this.logIn}>
        {something}
        <div className="form__row">
          <span className="form__label">Email:</span>
          <Input className="form__input" id="email" placeholder="Введите email" />
        </div>
        <div className="form__row">
          <span className="form__label">Пароль:</span>
          <Input className="form__input" id="password" placeholder="Введите пароль" />
        </div>
        <div className="form__row">
          <Button htmlType="submit" className="form__submit-btn" type="primary">
            Войти
          </Button>
          <NavLink to="/signup">
            <Button type="danger">Регистрация</Button>
          </NavLink>
        </div>
      </form>
    );
  }
}

export default Login;
