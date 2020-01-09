const likeOrDislike = (isFavorited, slug, token) => async dispatch => {
  // if (!isFavorited) {
  const response = await fetch(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  });
  const action = await response.json().then(el => {
    return {
      type: 'LIKE',
      payload: el,
    };
  });
  return dispatch(action);
  // }
  // return dispatch({ type: 'DISLIKE' });
};

export default likeOrDislike;