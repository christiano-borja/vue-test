import * as types from "./mutation-types";
import LatestNewsService from '@/network/services/latest-news';
import { messageHelper } from "@/store/helpers/message-helper";


export const fetchLatestNews = async ({ commit }, payload) => {
  commit(types.SET_LOADING, true);
  try {
    const response = await LatestNewsService.list(payload)
    commit(types.SET_LATEST_NEWS, response.data);

  } catch (error) {
    messageHelper.displayError("An unexpected error has occurred.");
  } finally {
    commit(types.SET_LOADING, false);
  }
}