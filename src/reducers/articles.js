const articles = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default articles;
