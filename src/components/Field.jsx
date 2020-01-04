import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const Field = ({ label, changer, blur, idName, value, touched, error, apiError }) => {
  return (
    <>
      <div className="form__row">
        <span className="form__label">{label[0].toUpperCase() + label.slice(1)}</span>
        <Input
          placeholder={`Введите ${label}`}
          onChange={changer}
          onBlur={blur}
          id={idName}
          name={idName}
          value={value}
          className={`form__input ${touched && error ? 'has-error' : ''}`}
        />
      </div>
      {touched && error ? <div className="input__error">{error}</div> : null}
      {apiError ? <div className="input__error">{apiError}</div> : null}
    </>
  );
};

Field.defaultProps = {
  label: '',
  idName: '',
  value: '',
  error: null,
  apiError: null,
  changer: null,
  blur: null,
  touched: null,
};

Field.propTypes = {
  label: PropTypes.string,
  idName: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  apiError: PropTypes.arrayOf(PropTypes.string),
  changer: PropTypes.func,
  blur: PropTypes.func,
  touched: PropTypes.bool,
};

export default Field;
