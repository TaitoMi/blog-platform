const getArticles = () => async dispatch => {
  const response = await fetch('https://conduit.productionready.io/api/articles/?limit=100', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const action = await response.json().then(articles => {
    return {
      type: 'GET_ARTICLES',
      payload: {
        articles,
      },
    };
  });
  return dispatch(action);
};

export default getArticles;
