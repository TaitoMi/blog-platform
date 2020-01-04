import React from 'react';
import { Form, Formik, FieldArray } from 'formik';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import Field from './Field';

const CreateArticle = ({ isAuthorized, createArticle, token, login }) => {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        body: '',
        tagList: [''],
      }}
      onSubmit={values => {
        if (!isAuthorized) {
          alert('Необходима авторизация');
          return;
        }
        const newValues = { ...values, tagList: values.tagList.filter(el => el !== '') };
        createArticle(newValues, token);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form className="form">
          <Field
            label="title"
            changer={handleChange}
            blur={handleBlur}
            idName="title"
            value={values.title}
            touched={touched.title}
            error={errors.title}
          />
          <Field
            label="description"
            changer={handleChange}
            blur={handleBlur}
            idName="description"
            value={values.description}
            touched={touched.description}
            error={errors.description}
          />
          <Field
            label="body"
            changer={handleChange}
            blur={handleBlur}
            idName="body"
            value={values.body}
            touched={touched.body}
            error={errors.body}
          />
          <FieldArray
            name="tagList"
            render={arrayHelpers => (
              <>
                <div className="form__row-tags">
                  {values.tagList.map((tag, index) => {
                    const newIndex = `tag-${index}`;
                    return (
                      <div key={newIndex} className="form__row">
                        <Input
                          className="form__tag"
                          placeholder="Введите тэг"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tagList[index]}
                          id={`tagList${index}`}
                          name={`tagList.${index}`}
                        />
                      </div>
                    );
                  })}
                </div>
                <Button type="button" onClick={() => arrayHelpers.push('')}>
                  Добавить тэг
                </Button>
              </>
            )}
          />
          <div className="form__row">
            <Button htmlType="submit" className="form__submit-btn" type="primary">
              Создать статью
            </Button>
          </div>
          <button
            type="button"
            onClick={() => login({ email: 'gfdaker96@gmail.com', password: '321zxc321' })}
          >
            login
          </button>
        </Form>
      )}
    </Formik>
  );
};

CreateArticle.defaultProps = {
  isAuthorized: null,
  token: '',
  createArticle: null,
  login: null,
};

CreateArticle.propTypes = {
  isAuthorized: PropTypes.bool,
  token: PropTypes.string,
  createArticle: PropTypes.func,
  login: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    isAuthorized: state.user.isAuthorized,
    token: state.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  const { createArticle, login } = bindActionCreators(actions, dispatch);
  return {
    createArticle,
    login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
