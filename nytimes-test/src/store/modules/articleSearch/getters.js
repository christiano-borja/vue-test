export default {
  isLocalLoading: state => {
    return state.isLocalLoading;
  },
  getArticlesList: state => {
    return state.searchArticles;
  },

  getArticleDetail: state => {
    return state.articleDetail;
  }
}