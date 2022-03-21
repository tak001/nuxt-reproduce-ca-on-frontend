import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';

Vue.use(Vuex);

// クラシックモード
// eslint-disable-next-line import/no-named-as-default-member
export default new Vuex.Store({
  modules: {
    user,
  },
});
