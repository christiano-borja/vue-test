import BaseService from '@/network/base-service'


class FeaturedNewsService extends BaseService {
  constructor () {
    super(`${process.env.VUE_APP_API_BASE_URL}`)
  }
  
  list() {
    return this.get(`mostpopular/v2/viewed/1.json?api-key=${process.env.VUE_APP_API_KEY}`)
    
  }

}
export default new FeaturedNewsService
