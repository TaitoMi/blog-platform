/* eslint-disable */
export const createArticle = (values, token) => async dispatch => {
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
  console.log(response.json());

  return 'ku';
};
