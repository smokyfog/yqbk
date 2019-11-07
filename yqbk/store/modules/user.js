const state = () => ({
  userinfo: {}
})

const mutations = {
  setUserInfo (state, val) {
    state.userinfo = val
  }
}

const actions = {
  setUserInfo: ({ commit }, userinfo) => {
    commit('setUserInfo', userinfo)
  }
}

const getters = {
  getUserInfo (state) {
    return (state.userinfo)
  }
}

export default { namespaced: true, state, mutations, actions, getters }
