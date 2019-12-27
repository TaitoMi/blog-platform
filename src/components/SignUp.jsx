/* eslint-disable */

import React, { Component } from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as actions from '../actions/actions';
import Field from './Field';
import validationSchema from '../validationSchema';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  registrationHandler = userData => {
    const { registration } = this.props;
    registration(userData);
  };

  render() {
    const { isRegSuccessful, error } = this.props;
    return (
      <Formik
        initialValues={{
          username: '',
          password: '',
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // setSubmitting(true);
          this.registrationHandler(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className="form" onSubmit={handleSubmit}>
            <>{JSON.stringify(values, null, 2)}</>
            {console.log(isRegSuccessful, 'reg')}
            <div>{isRegSuccessful}</div>
            <Field
              label="имя"
              changer={handleChange}
              blur={handleBlur}
              idName="username"
              value={values.username}
              touched={touched.username}
              error={errors.username}
            />
            <Field
              label="email"
              changer={handleChange}
              blur={handleBlur}
              idName="email"
              value={values.email}
              touched={touched.email}
              error={errors.email}
            />
            <Field
              label="пароль"
              changer={handleChange}
              blur={handleBlur}
              idName="password"
              value={values.password}
              touched={touched.password}
              error={errors.password}
            />
            <div className="form__row">
              <Button
                loading={isSubmitting}
                className="form__submit-btn"
                htmlType="submit"
                type="primary"
              >
                Зарегистрироваться
              </Button>
              <NavLink to="/login">
                <Button type="danger">Уже есть аккаунт?</Button>
              </NavLink>
            </div>
            {isRegSuccessful ? <div>{isRegSuccessful}</div> : null}
          </form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.user.email,
    username: state.user.username,
    password: state.user.password,
    isRegSuccessful: state.user.isRegSuccessful,
    error: state.user.error,
  };
};

const mapDispatchToProps = dispatch => {
  const { usernameHandler, registration } = bindActionCreators(actions, dispatch);
  return {
    usernameHandler,
    registration,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
