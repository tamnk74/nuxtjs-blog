import { get } from "@/plugins/api";
import constants from "@/constants";

export default function ({ store, redirect }) {
  // If the user is not authenticated
  const token = localStorage.getItem('token');
  if(!token) {
    return redirect('/');
  }
  if (store.state.auth.authenticated && store.state.auth.user.role !== 'ADMIN') {
    return redirect('/');
  }
  if (token && !store.state.auth.authenticated) {
    get(constants.api.REQUEST_GET_AUTH)
      .then(result => {
        if (result.data.data.role !== 'ADMIN') {
          return redirect('/login');
        }
      })
      .catch(error => {
        return redirect('/login');
      });
  }
}
