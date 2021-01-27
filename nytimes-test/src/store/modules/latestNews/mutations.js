import * as types from "./mutation-types";

export default {
  [types.SET_LOADING](state, payload) {
    state.isLocalLoading = payload;
  },
  
  [types.SET_LATEST_NEWS](state, payload) {
    state.latestNews = payload;
  },
}