import {mapState} from "vuex";
import axios from 'axios';
import Datepicker from 'vuejs-datepicker';
import constants from "@/constants";
import VueNotifications from 'vue-notifications';
import ImageInput from '@/components/ImageInput.vue';

export default {
  name: 'EditProfile',
  middleware: 'authenticated',
  async asyncData({store}) {
    await store.dispatch("auth/check");
  },
  components: {
    Datepicker,
    ImageInput
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated,
      user: state => state.auth.user,
    })
  },
  methods: {
    /**
     * Get full avartar path
     *
     * @param user
     * @returns {string}
     */
    getAvatarFullPath(user) {
      return process.env.baseUrl.concat(constants.path.USER_AVATAR + '/' + user.avatar);
    },
    /**
     * Get form data
     *
     * @returns {FormData}
     */
    getFormData() {
      const formData = new FormData();
      formData.append('fullName', this.user.fullName);
      formData.append('email', this.user.email);
      formData.append('address', this.user.address);
      if (this.user.birthday) {
        formData.append('birthday', this.user.birthday);
      }
      if (this.user.oldPassword) {
        formData.append('password', this.user.password);
        formData.append('oldPassword', this.user.oldPassword);
      }
      if (this.user.avatar.file) {
        formData.append('avatar', this.user.avatar.file, this.user.avatar.file.name);
      }

      return formData;
    },
    /**
     * Submit form
     */
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log('Uploading...');

          let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';
          axios.defaults.headers.common = {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          };
          return axios({
            method: 'PUT',
            url: process.env.baseUrl.concat('/api/' + constants.api.UPDATE_PROFILE),
            data: this.getFormData()
          }).then(response => {
            VueNotifications.success({
              title: response.status + ' ' + response.statusText,
              message: 'Successfully !'
            });
            this.$store.dispatch("auth/check");
            this.$router.push({name: 'profile'});
          })
            .catch(error => {
              this.$store.commit("notifyError", error, {root: true});
              console.error(error);
            })
        }
      }).catch(e => {
        console.log(e);
      });
    },
  }
}