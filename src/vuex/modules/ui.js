const ui = {
  state: {
    payInfoModalState: false,
    payInfo: null,
  },
  mutations: {
    togglePayInfoModalState(state, payload) {
      state.payInfoModalState = !state.payInfoModalState;
      state.payInfo = payload;
    },
  },
};

export default ui;
