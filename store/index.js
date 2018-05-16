import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      post: {},
      posts: []
    },
    getters: {
      posts: state => state.posts
    },
    mutations: {
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setCurrentPost: (state, post) => {
        state.post = post
      }
    },
    actions: {
      async getPosts ({ commit }) {
        let { data } = await axios.get(`http://localhost:8080/api/items`)
        commit('setPosts', data)
      },
      async getPost ({ commit }, id) {
        let { data } = await axios.get(`http://localhost:8080/api/items/${id}`)
        commit('setCurrentPost', data)
      },
      async nuxtServerInit ({commit}, {store, route, params}) {
        if (process.server && route.name === 'trend') {
          let { data } = await axios.get(`http://localhost:8080/api/items`)
          commit('setPosts', data)
          }
      }
    }
  })
}

export default createStore
