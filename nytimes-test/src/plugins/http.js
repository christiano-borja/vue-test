'use strict'
import axios from 'axios'

const config = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en'
  }
  
}

const http = axios.create(config)


// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default http
