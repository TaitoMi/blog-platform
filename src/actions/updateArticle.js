/* eslint-disable */
const updateArticle = (values, slug, token) => async dispatch => {
  const response = await fetch(`https://conduit.productionready.io/api/articles/${slug}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      article: { ...values },
    }),
  });
};

export default updateArticle;
