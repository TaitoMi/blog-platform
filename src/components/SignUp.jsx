import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

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
    // eslint-disable-next-line react/prop-types
    const { email, username, password, emailHandler, usernameHandler } = this.props;
    return (
      <form className="form" onSubmit={this.registation}>
        {thx}
        <div className="form__row">
          <span className="form__label">Имя пользователя:</span>
          <Input
            className="form__input"
            value={username}
            placeholder="Введите имя пользователя"
            onChange={usernameHandler}
          />
        </div>
        <div className="form__row">
          <span className="form__label">Email:</span>
          <input type="text" value={email} onChange={emailHandler} />
          <Input
            className="form__input"
            value={email}
            placeholder="Введите email"
            onChange={emailHandler}
          />
        </div>
        <div className="form__row">
          <span className="form__label">Пароль:</span>
          <Input className="form__input" value={password} placeholder="Введите пароль" />
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

const mapStateToProps = ({ email, username, password }) => {
  return {
    email,
    username,
    password,
  };
};

const mapDispatchToProps = dispatch => {
  const { emailHandler, usernameHandler } = bindActionCreators(actions, dispatch);
  return {
    emailHandler,
    usernameHandler,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
