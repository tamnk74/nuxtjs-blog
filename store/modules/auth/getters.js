import state from './state'
export default {
  isLogin: (state) => {
    return state.authenticated;
  },
  getName: (state) => {
    if (state.user) {
      const {firstName, lastName} = state.user;
      return firstName + ' ' + lastName;
    }
    return '';
  },
}
