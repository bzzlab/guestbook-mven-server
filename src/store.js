import Vue from "vue";
import Vuex from "vuex";
import * as auth from './services/AuthService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    //url of the server-api (application program interface)
    apiUrl: 'http://localhost:3000',
    username: null,
    userId: null
  },
  mutations: {
    authenticate(state){
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn){
        state.username = auth.getUsername();
        state.userId = auth.getUserid();
      } else {
        state.username = null;
        state.userId = null;
      }
    }
  },
  actions: {
    authenticate(context){
      //counterpart of dispatch-method
      context.commit('authenticate');
    }
  }
});
