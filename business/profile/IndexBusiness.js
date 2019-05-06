import {mapState} from "vuex";
import moment from 'moment';
import axios from 'axios';
import constants from "@/constants";

export default {
  name: 'Profile',
  async asyncData (context) {
    console.log('%c Profile asyncData...', 'color: blue; font-size: 20px;');
    let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';

    axios.defaults.headers.common = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };

    const result = await axios({
      method: 'GET',
      url: process.env.baseUrl + '/api/auth/userInfo',
      params: {}
    });

    if (result.status == 200) {
      return { user: result.data.data }
    }

    return {}
  },
  data () {
    return {
    }
  },
  created () {
    console.log('%c Profile created ...', 'color: blue');
  },
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated
    }),
    
  },
  methods: {
    formatDate (datetime) {
      return moment(datetime).format('DD-MMM-YYYY');
    },
    getAvatarFullPath (user) {
      return process.env.baseUrl.concat(constants.path.USER_AVATAR + '/' + user.avatar);
    },
  }
}