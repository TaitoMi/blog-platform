/* eslint-disable */
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
