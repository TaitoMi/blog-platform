export const registration = ({ email, username, password }) => {
  return async dispatch => {
    const response = await fetch('https://conduit.productionready.io/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          username,
          password,
        },
      }),
    });
    if (response.ok) {
      return dispatch({
        type: 'USER_REGISTERED',
        payload: {
          reg: 'Вы успешно зарегистрировались',
        },
      });
    }
    let action;
    response.json().then(err => {
      action = {
        type: 'REG_ERROR',
        payload: {
          error: err.errors,
        },
      };
    });
    return dispatch(action);
  };
};

const ku = 'ku';

export default ku;
