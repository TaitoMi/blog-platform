import React from 'react';
import { Form, Formik, FieldArray } from 'formik';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as actions from '../actions/actions';
import Field from './Field';

const ArticleCreate = ({ isAuthorized, createArticle, token }) => {
  const history = useHistory();

  return (
    <>
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
          history.push('/');
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
                      return (
                        <div key={tag} className="form__row">
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
          </Form>
        )}
      </Formik>
    </>
  );
};

ArticleCreate.defaultProps = {
  isAuthorized: null,
  token: '',
  createArticle: null,
};

ArticleCreate.propTypes = {
  isAuthorized: PropTypes.bool,
  token: PropTypes.string,
  createArticle: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    isAuthorized: state.user.isAuthorized,
    token: state.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  const { createArticle } = bindActionCreators(actions, dispatch);
  return {
    createArticle,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreate);
