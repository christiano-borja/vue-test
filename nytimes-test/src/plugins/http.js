'use strict'
import axios from 'axios'
// import authService from '../network/services/auth-service'

const config = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en'
  }
  
}

const http = axios.create(config)

// http.interceptors.request.use(
//   function (config) {
//     const accessToken = localStorage.getItem('authToken');

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     // Do something before request is sent
//     return config
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

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
