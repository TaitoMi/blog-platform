import React from 'react';
import { Button, Input } from 'antd';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Field from './Field';
import * as actions from '../actions/actions';

const isRequired = 'Обязательное поле';
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Не меньше 8')
    .max(40, 'Не больше 40'),
  email: Yup.string()
    .required(isRequired)
    .email('Неправильный email адрес'),
});

const Login = ({ error, isAuthorized, login, clear }) => {
  const loginHandler = user => {
    login(user);
  };
  const render = () => (isAuthorized ? <Redirect to="/" /> : null);
  return (
    <>
      <Route exact path="/login" render={render} />
      <Formik
        initialValues={{
          password: '',
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          loginHandler(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form className="form">
            {error ? <div>Неправильный email или пароль</div> : null}
            <Field
              label="email"
              changer={handleChange}
              blur={handleBlur}
              idName="email"
              value={values.email}
              touched={touched.email}
              error={errors.email}
              apiError={error ? error.email : null}
            />
            <div className="form__row">
              <span className="form__label">Введите пароль</span>
              <Input.Password
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                id="password"
                name="password"
              />
            </div>
            <div className="form__row">
              <Button htmlType="submit" className="form__submit-btn" type="primary">
                Войти
              </Button>
              <Button
                htmlType="button"
                onClick={() => login({ email: 'gfdaker96@gmail.com', password: '321zxc321' })}
                className="form__submit-btn"
                type="primary"
              >
                loginForTest
              </Button>
              <NavLink to="/signup" onClick={clear}>
                <Button type="danger">Зарегистрироваться</Button>
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

Login.defaultProps = {
  login: null,
  error: null,
  isAuthorized: null,
  clear: null,
};

Login.propTypes = {
  login: PropTypes.func,
  error: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  clear: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    error: state.user.error,
    isAuthorized: state.user.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  const { login, clear } = bindActionCreators(actions, dispatch);
  return {
    login,
    clear,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
