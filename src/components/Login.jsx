import React, { Component } from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import validationSchema from '../validationSchema';
import Field from './Field';
import * as actions from '../actions/actions';

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
    const { error } = this.props;
    return (
      <Formik
        initialValues={{
          password: '',
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('asdasdasd');
          this.loginHandler(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form className="form">
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
              <Button className="form__submit-btn" htmlType="submit" type="primary">
                Войти
              </Button>
              <NavLink to="/signup">
                <Button type="danger">Зарегистрироваться</Button>
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

Login.defaultProps = {
  login: null,
  error: null,
};

Login.propTypes = {
  login: PropTypes.func,
  error: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

const mapStateToProps = state => {
  return {
    error: state.user.error,
  };
};

const mapDispatchToProps = dispatch => {
  const { login } = bindActionCreators(actions, dispatch);
  return {
    login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
