import * as types from "./mutation-types";
import SearchArticlesService from '@/network/services/search-articles';
import { messageHelper } from "@/store/helpers/message-helper";


export const fetchSearchArticles = async ({ commit }, params) => {
  commit(types.SET_LOADING, true);
  try {
    const response = await SearchArticlesService.list(params)
    commit(types.SET_SEARCH_ARTICLES, response.data.response);
  } catch (error) {
    messageHelper.displayError("An unexpected error has occurred.");
  } finally {
    commit(types.SET_LOADING, false);
  }
}
export const fetchArticleDetail = async ({ commit }, params) => {
  commit(types.SET_LOADING, true);
  try {
    const response = await SearchArticlesService.article(params)
    commit(types.SET_ARTICLE_DETAIL, response.data.response);
  } catch (error) {
    messageHelper.displayError("An unexpected error has occurred.");
  } finally {
    commit(types.SET_LOADING, false);
  }
}