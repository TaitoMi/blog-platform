import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../actions/actions';

class MainPage extends React.Component {
  check = async () => {
    const { token } = this.props;
    const response = await fetch('https://conduit.productionready.io/api/articles/?limit=100', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    await response.json().then(el => {
      this.check2();
      console.log(el);
    });
  };

  check2 = async () => {
    const { token } = this.props;
    const response = await fetch('https://conduit.productionready.io/api/articles/feed', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    await response.json().then(el => console.log(el));
  };

  render() {
    const { id, email, username, exit } = this.props;
    return (
      <form className="user" onSubmit={exit}>
        <div className="user__info">
          <div className="user__row">id: {id}</div>
          <div className="user__row">email: {email}</div>
          <div className="user__row">username: {username}</div>
        </div>
        <button onClick={this.check} type="button">
          clic k
        </button>
        <NavLink to="/add">
          <Button type="primary">Создать страницу</Button>
        </NavLink>
        <Button htmlType="submit" className="user__btn" type="danger">
          Выход
        </Button>
      </form>
    );
  }
}

MainPage.defaultProps = {
  id: '',
  email: '',
  username: '',
  exit: null,
  token: '',
};

MainPage.propTypes = {
  id: PropTypes.string,
  email: PropTypes.string,
  username: PropTypes.string,
  exit: PropTypes.func,
  token: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    id: state.user.id,
    email: state.user.email,
    username: state.user.username,
    token: state.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  const { exit } = bindActionCreators(actions, dispatch);
  return {
    exit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
