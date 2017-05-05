import * as actions from './actions';
import * as getters from './getters';

const initial = {
  host: true
}

import {
  SET_HOST
} from './mutation-types';

const mutations = {
  [SET_HOST] (state, status) {
    state.host = status;
  },
}

export default {
  state: { ...initial },
  actions,
  getters,
  mutations
}
