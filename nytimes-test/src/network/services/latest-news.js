import BaseService from '@/network/base-service'


class LatestNewsService extends BaseService {
  constructor () {
    super(`${process.env.VUE_APP_API_BASE_URL}`)
  }
  
  list(section) {
    return this.get(`news/v3/content/nyt/${section}.json?api-key=${process.env.VUE_APP_API_KEY}`)
  }

}
export default new LatestNewsService
