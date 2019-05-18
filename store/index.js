import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts';
import categories from './modules/categories';
import auth from './modules/auth';
import users from './modules/users';
import VueNotifications from 'vue-notifications';

Vue.use(Vuex);
console.log('Loading vuex');

const createStore = () => {
	return new Vuex.Store({
		// Assign the modules to the store
		modules: {
			auth,
			users,
			posts,
			categories,
		},
		// #root state
		state: () => ({
			loading: false,
			key: '',
			authentication: null
		}),
		// #root mutations
		mutations: {
			setLoading(state, loading) {
				state.loading = loading;
			},
			setKey(state, key) {
				state.key = key;
			},
			notifyError(state, error) {
				console.log('ERROR: ', error);
				state.error = error;
				if (!error.response) {
					VueNotifications.error({ message: error.message })
				}
				else {
					VueNotifications.error({
						title: error.response.status + ' ' + error.response.statusText,
						message: error.response.data.error && error.response.data.error.message
					});
					if (error.response.status === 401) {
						localStorage.removeItem("token");
						localStorage.removeItem("user");
						state.auth.authenticated = false;
						state.auth.user = '';
					}
				}
				state.loading = false;
			},
			setAuth(state, auth) {
				state.authentication = auth
			}
		},
		actions: {
			nuxtServerInit({ commit }, { req }) {
				let auth = null
				if (req.headers.cookie) {
					const parsed = cookieparser.parse(req.headers.cookie)
					try {
						auth = JSON.parse(parsed.auth);
					} catch (err) {
						// No valid cookie found
					}
				}
				console.log('Auth: ', auth);
				commit('setAuth', auth)
			}
		}
		// If strict mode should be enabled
		// strict: debug,
	})
}

export default createStore;
