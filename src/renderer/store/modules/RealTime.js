const state = {
  socket: {
    isConnected: false,
    messages: []
  }
}

const mutations = {
  SOCKET_CONNECT: function (state, status) {
    state.socket.isConnected = true
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
