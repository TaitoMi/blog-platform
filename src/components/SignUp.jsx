import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thx: 'ku',
    };
  }

  registation = event => {
    event.preventDefault();
  };

  render() {
    const { thx } = this.state;
    return (
      <form className="form" onSubmit={this.registation}>
        {thx}
        <div className="form__row">
          <span className="form__label">Имя пользователя:</span>
          <Input className="form__input" id="username" placeholder="Введите имя пользователя" />
        </div>
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
            Регистрация
          </Button>
          <NavLink to="/login">
            <Button type="danger">Уже есть аккаунт?</Button>
          </NavLink>
        </div>
      </form>
    );
  }
}
export default SignUp;
