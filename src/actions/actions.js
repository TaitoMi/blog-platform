export const emailHandler = event => {
  return {
    type: 'EMAIL_INPUT',
    payload: {
      text: event.target.value,
    },
  };
};

export const usernameHandler = event => {
  return {
    type: 'USERNAME_INPUT',
    payload: {
      text: event.target.value,
    },
  };
};

const ku = 'ku';

export default ku;
