import React from 'react';
import { FieldArray, Form, Formik } from 'formik';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Field from './Field';

const ArticleEdit = ({ articles, isAuthorized, slug, token, updateArticle }) => {
  const article = articles.filter(el => el.slug === slug)[0];
  const { title, body, description, tagList } = article;
  return (
    <Formik
      initialValues={{
        title,
        description,
        body,
        tagList,
      }}
      onSubmit={values => {
        if (!isAuthorized) {
          alert('Необходима авторизация');
        }
        console.log(values, token, updateArticle);
        // const newValues = { ...values, tagList: values.tagList.filter(el => el !== '') };
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
              Изменить статью
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

ArticleEdit.defaultProps = {
  articles: [],
  isAuthorized: null,
  slug: '',
  token: '',
  updateArticle: null,
};

ArticleEdit.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  isAuthorized: PropTypes.bool,
  slug: PropTypes.string,
  token: PropTypes.string,
  updateArticle: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    articles: state.articles.articles,
    isAuthorized: state.user.isAuthorized,
    token: state.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  const { updateArticle } = bindActionCreators(actions, dispatch);
  return {
    updateArticle,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);
