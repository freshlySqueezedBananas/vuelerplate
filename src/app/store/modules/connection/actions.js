import Vue from 'vue';

import {
  SET_HOST,
} from './mutation-types';

export function setHost({ commit }, status) {
  commit(SET_HOST, status);
}