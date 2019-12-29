/* eslint-disable */
import React from 'react';
import { Input } from 'antd';

const Field = ({
                 label,
                 changer,
                 blur,
                 idName,
                 value,
                 touched,
                 error,
               apiError }) => {
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
          className={`form__input ${touched && error ? 'has-error' : null}`}
        />
      </div>
      {touched && error ? <div className="input__error">{error}</div> : null}
      {apiError ? <div className="input__error">{apiError}</div> : null}
    </>
  );
};

export default Field;
