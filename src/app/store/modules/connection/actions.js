import Vue from 'vue';

import {
  sET_HOST,
} from './mutation-types';

export function setHost({ commit }, status) {
  commit(sET_HOST, status);
}