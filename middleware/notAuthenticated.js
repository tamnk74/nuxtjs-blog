import { get } from "@/plugins/api";
import constants from "@/constants";

export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  console.log('Run middleware not auth');
  const token = localStorage.getItem('token');
  if (store.state.auth.authenticated) {
    return redirect('/posts');
  }
  if (!store.state.auth.authenticated && token) {
    get(constants.api.REQUEST_GET_AUTH)
      .then(result => {
        return redirect('/posts');
      });
  }
}
