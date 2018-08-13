import Vue from 'vue';
import Vuex from 'vuex';
import account from './modules/account';
import ui from './modules/ui';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    account,
    ui,
  },
  state: {
    loginState: false,
    hostState: null,
  },
  mutations: {
    setLoginState(state, payload) {
      state.loginState = payload.loginState;
    },
    setHostState(state, payload) {
      state.hostState = payload.hostState;
    },
  },
  actions: {
    login(value) {
      store.commit({
        name: 'setLoginState',
        loginSate: value,
      });
    },
    hostLogin(value) {
      store.commit({
        name: 'setHostState',
        hostState: value,
      });
    },
  },
});

export default store;
