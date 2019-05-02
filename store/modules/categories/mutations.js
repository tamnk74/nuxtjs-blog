import * as types from './mutation-types';

export default {
  [types.SET_CATEGORY_LIST](state, data) {
    state.categories = data.data;
    state.pageInfo = data.pageInfo;
  },
  [types.SET_CATEGORY](state, category) {
    state.category = category;
  },
  [types.UPDATE_CATEGORY](state, data) {
    state.categories = [...state.categories.filter(category => category !== data.id), data];
  },
  [types.DELETE_CATEGORY](state, id) {
    state.categories = state.categories.filter(category => category.id !== id);
  },
}
