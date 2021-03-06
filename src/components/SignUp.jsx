import React from 'react';
import { Button, Input } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import * as actions from '../actions/actions';
import Field from './Field';

const isRequired = 'Обязательное поле';
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required(isRequired)
    .min(4, 'Не меньше 4 символов')
    .max(50, 'Не более 50 символов'),
  password: Yup.string()
    .min(8, 'Не меньше 8')
    .max(40, 'Не больше 40'),
  email: Yup.string()
    .required(isRequired)
    .email('Неправильный email адрес'),
});

const SignUp = ({ isSuccessful, error, clear, registration }) => {
  const registrationHandler = userData => {
    registration(userData);
  };

  const history = useHistory();
  if (isSuccessful) {
    history.push('/login');
  }
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(isSuccessful);
        registrationHandler(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form className="form">
          <Field
            label="имя"
            changer={handleChange}
            blur={handleBlur}
            idName="username"
            value={values.username}
            touched={touched.username}
            error={errors.username}
            apiError={error ? error.username : null}
          />
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
            <Button className="form__submit-btn" htmlType="submit" type="primary">
              Зарегистрироваться
            </Button>
            <NavLink to="/login" onClick={clear}>
              <Button type="danger">Уже есть аккаунт?</Button>
            </NavLink>
          </div>
          {isSuccessful ? <div>Вы успешно зарегистрировались</div> : null}
        </Form>
      )}
    </Formik>
  );
};

SignUp.defaultProps = {
  registration: null,
  isSuccessful: null,
  error: null,
  clear: null,
};

SignUp.propTypes = {
  registration: PropTypes.func,
  isSuccessful: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
  clear: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    isSuccessful: state.user.isSuccessful,
    error: state.user.error,
  };
};

const mapDispatchToProps = dispatch => {
  const { registration, clear } = bindActionCreators(actions, dispatch);
  return {
    registration,
    clear,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
