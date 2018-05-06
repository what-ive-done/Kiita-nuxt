export const state = () => ({
  list: []
})

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    console.log('nuxt server init')
  }
}

export const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export const getters = {
  list: state => state.list
}
