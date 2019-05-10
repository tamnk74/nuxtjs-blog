import * as types from './mutation-types';
import { debug } from 'util';

export default {
  [types.SET_USER_LIST](state, data) {
    state.users = data.data;
    state.pageInfo = data.pageInfo;
  },
  [types.SET_USER](state, user) {
    state.user = user;
  },
  [types.UPDATE_USER](state, data) {
    state.users = [...state.users.filter(user => user !== data.id), data];
  },
  [types.DELETE_USER](state, id) {
    state.users = state.users.filter(user => user.id !== id);
  },
}
