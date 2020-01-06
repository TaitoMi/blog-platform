const initialState = {
  articles: [],
  articlesCount: 0,
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE':
      return {
        articles: [action.payload.article, ...state.articles],
        articlesCount: state.articlesCount + 1,
      };
    case 'GET_ARTICLES':
      return {
        articles: [...action.payload.articles.articles],
        articlesCount: action.payload.articles.articlesCount,
      };
    default:
      return state;
  }
};

export default articles;
