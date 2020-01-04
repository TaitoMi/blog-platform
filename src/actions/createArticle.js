/* eslint-disable */

const createArticle = (values, token) => async dispatch => {
  const response = await fetch('https://conduit.productionready.io/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      article: { ...values },
    }),
  });
  if(response.ok) {
    const action = await response.json().then(el => {
      console.log(el);
      return {
        type: 'CREATE_ARTICLE',
        payload: {...el},
      }
    })
    return dispatch(action);
  }

  return 'ku';
};

export default createArticle;
