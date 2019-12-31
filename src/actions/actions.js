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
          reg: true,
        },
      });
    }
    const action = await response.json().then(err => {
      return {
        type: 'REG_ERROR',
        payload: {
          error: err.errors,
        },
      };
    });
    return dispatch(action);
  };
};

export const login = ({ email, password }) => async dispatch => {
  const response = await fetch('https://conduit.productionready.io/api/users/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email,
        password,
      },
    }),
  });
  if (response.ok) {
    const action = await response.json().then(user => {
      return {
        type: 'USER_LOGIN',
        payload: {
          ...user,
        },
      };
    });
    return dispatch(action);
  }
  const action = await response.json().then(() => {
    return {
      type: 'LOGIN_ERROR',
    };
  });
  return dispatch(action);
};

export const clear = () => ({ type: 'ERROR_CLEAR' });

export const exit = () => ({ type: 'LOGIN_EXIT' });
