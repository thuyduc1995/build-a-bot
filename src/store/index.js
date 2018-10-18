import Vue from 'vue';
import Vuex from 'vuex';
import robotModules from './modules/robot';
import userModules from './modules/user';

Vue.use(Vuex);
/* eslint-disable */
export default new Vuex.Store({
  modules: {
    robot: robotModules,
    user: userModules
  }
});
