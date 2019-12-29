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
    const { isSuccessful, error } = this.props;
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
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <Field
              label="имя"
              changer={handleChange}
              blur={handleBlur}
              idName="username"
              value={values.username}
              touched={touched.username}
              error={errors.username}
              apiError={ error ? error.username : null }
            />
            <Field
              label="email"
              changer={handleChange}
              blur={handleBlur}
              idName="email"
              value={values.email}
              touched={touched.email}
              error={errors.email}
              apiError={ error ? error.email : null}
            />
            <Field
              label="пароль"
              changer={handleChange}
              blur={handleBlur}
              idName="password"
              value={values.password}
              touched={touched.password}
              error={errors.password}
              apiError={ error ? error.password : null}
            />
            <div className="form__row">
              <Button
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
            {isSuccessful ? <div>Вы успешно зарегистрировались</div> : null}
          </form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSuccessful: state.user.isSuccessful,
    error: state.user.error,
  };
};

const mapDispatchToProps = dispatch => {
  const { registration } = bindActionCreators(actions, dispatch);
  return {
    registration,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
