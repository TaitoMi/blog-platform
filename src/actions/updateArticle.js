/* eslint-disable */
const updateArticle = (values, slug, token) => async dispatch => {
  console.log(values);
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
  await response.json().then(el => console.log(el));
};

export default updateArticle;
