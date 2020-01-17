const getArticles = (token, off) => async dispatch => {
  const header = token ? { Authorization: `Token ${token}` } : null;
  const offset = off * 10 - 10;
  const response = await fetch(
    `https://conduit.productionready.io/api/articles?offset=${offset}&limit=20`,
    {
      headers: {
        'Content-Type': 'application/json',
        header,
      },
    }
  );
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
