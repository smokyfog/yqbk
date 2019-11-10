const state = () => ({
  userinfo: {}
})

const mutations = {
  // 设置用户信息
  setUserInfo (state, val) {
    state.userinfo = val
  },
  // 删除用户信息
  delUserInfo (state) {
    state.userinfo = {}
  }
}

const actions = {
  setUserInfo: ({ commit }, userinfo) => {
    commit('setUserInfo', userinfo)
  },
  delUserInfo: ({ commit }) => {
    commit('delUserInfo')
  }
}

const getters = {
  getUserInfo (state) {
    return (state.userinfo)
  }
}

export default { namespaced: true, state, mutations, actions, getters }
