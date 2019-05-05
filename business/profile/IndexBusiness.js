import {mapState} from "vuex";
import moment from 'moment';
import constants from "@/constants";

export default {
  name: 'Profile',
  data () {
    return {
    }
  },
  created () {
    console.log('%c Profile created ...', 'color: blue');
  },
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated,
      user: state => {
        console.log('%c Profile computed ...', 'color: blue');
        return state.auth.user;
      }
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