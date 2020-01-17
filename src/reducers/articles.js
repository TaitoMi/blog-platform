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
    case 'LIKE':
      return {
        articles: state.articles.map(el => {
          if (el.slug === action.payload.article.slug) {
            return {
              ...action.payload.article,
              favoritesCount: action.payload.article.favoritesCount,
              favorited: action.payload.article.favorited,
            };
          }
          return el;
        }),
        articlesCount: state.articlesCount,
      };
    default:
      return state;
  }
};

export default articles;
