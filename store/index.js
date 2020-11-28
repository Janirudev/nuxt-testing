export const state = () => ({
  posts: [],
  countries: []
})

export const getters = {
  posts(state) {
    return state.posts
  },
  countries(state) {
    return state.countries
  }
}

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_COUNTRIES(state, countries) {
    state.countries = countries
  }
}

export const actions = {
  setPosts({ commit }, posts) {
    commit("SET_POSTS", posts)
  },
  setCountries({ commit }, countries) {
    commit('SET_COUNTRIES', countries)
  }
}