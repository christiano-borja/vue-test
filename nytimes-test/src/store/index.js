import Vue from 'vue'
import Vuex from 'vuex'
import modules from "./modules";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: undefined
  },

  getters: {
    isLoading: (state) => {
      return state.isLoading
    }
  },

  mutations: {
    setLoadingState (state, loading) {
      state.isLoading = loading
    }
  },

  actions: {
    changeLoadingState ({ commit }, loading) {
      commit('setLoadingState', loading)
    }
  },
  
  modules
})
  