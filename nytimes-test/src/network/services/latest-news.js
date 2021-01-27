import BaseService from '@/network/base-service'


class LatestNewsService extends BaseService {
  constructor () {
    super(`${process.env.VUE_APP_API_BASE_URL}`)
  }
  
  list() {
    return this.get(`topstories/v2/home.json?api-key=${process.env.VUE_APP_API_KEY}`)
  }

}
export default new LatestNewsService
