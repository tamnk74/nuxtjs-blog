import { get } from "@/plugins/api";
import constants from "@/constants";

export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log('Run middleware');
  const token = localStorage.getItem('token');
  if (!store.state.auth.authenticated && !token) {
    return redirect('/login')
  }
  if (!store.state.auth.authenticated && token) {
    get(constants.api.REQUEST_GET_AUTH)
      .catch(error => {
        return redirect('/login');
      });
  }
}
