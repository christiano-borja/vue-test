import * as types from "./mutation-types";

export default {
  [types.SET_LOADING](state, payload) {
    state.isLocalLoading = payload;
  },
  
  [types.SET_SEARCH_ARTICLES](state, payload) {
    state.searchArticles = payload;
  },

  [types.SET_ARTICLE_DETAIL](state, payload) {
    state.articleDetail = payload;
  },
}