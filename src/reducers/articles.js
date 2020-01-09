const initialState = {
  articles: [],
  articlesCount: 0,
};

let currArticles = [];
let index;

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
      currArticles = [...state.articles];
      index = currArticles.findIndex(el => el.slug === action.payload.article.slug);
      currArticles[index] = {
        ...action.payload.article,
        favoritesCount: action.payload.article.favoritesCount,
        favorited: action.payload.article.favorited,
      };
      return {
        articles: [...currArticles],
        articlesCount: state.articlesCount,
      };
    default:
      return state;
  }
};

export default articles;
