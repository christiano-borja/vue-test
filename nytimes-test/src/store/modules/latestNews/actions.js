import * as types from "./mutation-types";
import FeaturedNewsService from '@/network/services/featured-news';
import { messageHelper } from "@/store/helpers/message-helper";


export const fetchFeaturedNews = async ({ commit }) => {
  commit(types.SET_LOADING, true);
  try {
    const response = await FeaturedNewsService.list()
    commit(types.SET_FEATURED_NEWS, response.data.results);

  } catch (error) {
    messageHelper.displayError("An unexpected error has occurred.");
  } finally {
    commit(types.SET_LOADING, false);
  }
}