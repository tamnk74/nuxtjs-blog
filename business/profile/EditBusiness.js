import {mapState} from "vuex";
import axios from 'axios';
import Datepicker from 'vuejs-datepicker';
import constants from "@/constants";
import VueNotifications from 'vue-notifications';
import ImageInput from '@/components/ImageInput.vue';

export default {
  name: 'EditProfile',
  async asyncData ({ store }) {
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
      result.data.data.avatar = {name: result.data.data.avatar};
      return { user: result.data.data }
    }
    // await store.dispatch("auth/check");
  },
  components: {
    Datepicker,
    ImageInput
  },
  data () {
    return {
    }
  },
  created () {
    console.log('%c Edit Profile created ...', 'color: blue');
    this.$store.dispatch("auth/check");
  },
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated,
      user: state => state.auth.user
    })
  },
  methods: {
    getAvatarFullPath (user) {
      return process.env.baseUrl.concat(constants.path.USER_AVATAR + '/' + user.avatar.name);
    },
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log('Uploading...');
          const formData = new FormData();
          formData.append('fullName', this.user.fullName);
          formData.append('email', this.user.email);
          formData.append('address', this.user.address);
          if (this.user.birthday) {
            formData.append('birthday', this.user.birthday);
          }
          if (this.user.avatar.file) {
            formData.append('avatar', this.user.avatar.file, this.user.avatar.file.name);
          }
          
          let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';
          axios.defaults.headers.common = {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          };
          return axios({
            method: 'PUT',
            url: process.env.baseUrl.concat('/api/' + constants.api.UPDATE_PROFILE),
            data: formData
          }).then(response => {
            VueNotifications.success({
              title: response.status + ' ' + response.statusText,
              message: 'Successfully !'
            });
            this.$store.dispatch("auth/check");
            this.$router.push({ name: 'profile'});
          })
            .catch(error => {
              this.$store.commit("notifyError", error, { root: true });
              console.error(error);
            })
        }
      }).catch(e => {
        return false;
      });
    },
  }
}