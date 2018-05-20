import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      profileUser: {},
      post: {},
      posts: []
    },
    getters: {
      posts: state => state.posts,
      profileUser: state => state.profileUser
    },
    mutations: {
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setCurrentPost: (state, post) => {
        state.post = post
      },
      setProfileUser: (state, user) => {
        state.profileUser = user
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
      async getProfileUser ({ commit }, username) {
        let { data } = await axios.get(`http://localhost:8080/api/users/${username}`)
        commit('setProfileUser', data)
      },
      async nuxtServerInit ({commit}, {store, route, params}) {
        if (process.server && route.name === 'trend') {
          let { data } = await axios.get(`http://localhost:8080/api/items`)
          commit('setPosts', data)
        }
        const includesUsername = route.name.includes('username')
        if (process.server && includesUsername) {
          try {
            let { data } = await axios.get(`http://localhost:8080/api/users/${params.username}`)
            commit('setProfileUser', data)
          } catch (error) {
            console.log(error.message)
          }
        }
      }
    }
  })
}

export default createStore
