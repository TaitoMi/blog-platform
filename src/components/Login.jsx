import React, { Component } from 'react';
import { Button } from 'antd';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loginHandler = user => {
    const { login } = this.props;
    login(user);
  };

  render() {
    const { error, isAuthorized } = this.props;
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
            this.loginHandler(values);
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
              <Field
                label="пароль"
                changer={handleChange}
                blur={handleBlur}
                idName="password"
                value={values.password}
                touched={touched.password}
                error={errors.password}
                apiError={error ? error.password : null}
              />
              <div className="form__row">
                <Button htmlType="submit" className="form__submit-btn" type="primary">
                  Войти
                </Button>
                <NavLink to="/signup">
                  <Button type="danger">Зарегистрироваться</Button>
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

Login.defaultProps = {
  login: null,
  error: null,
  isAuthorized: null,
};

Login.propTypes = {
  login: PropTypes.func,
  error: PropTypes.bool,
  isAuthorized: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    error: state.user.error,
    isAuthorized: state.user.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  const { login } = bindActionCreators(actions, dispatch);
  return {
    login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
