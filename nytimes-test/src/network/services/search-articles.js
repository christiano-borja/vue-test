import BaseService from '@/network/base-service'


class SearchArticlesService extends BaseService {
  constructor () {
    super(`${process.env.VUE_APP_API_BASE_URL}`)
  }
  
  list(param) {
    return this.get(`search/v2/articlesearch.json?q=${param}&api-key=${process.env.VUE_APP_API_KEY}`)
  }

  article(param) {
    return this.get(`search/v2/articlesearch.json?fq=${param}&api-key=${process.env.VUE_APP_API_KEY}`)
  }

}
export default new SearchArticlesService

