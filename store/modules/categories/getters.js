import state from './state'
export default {
  isLogin: (state) => {
    return state.authenticated;
  },
}
