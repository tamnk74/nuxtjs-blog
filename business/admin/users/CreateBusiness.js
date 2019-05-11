import { mapState } from 'vuex';
import constants from '@/constants';
import ImageInput from '@/components/ImageInput'
import Datepicker from 'vuejs-datepicker';
import axios from 'axios';
import VueNotifications from 'vue-notifications'

export default {
  name: 'CreateUser',
  layout: 'default',
  middleware: 'admin',
  head() {
    return {
      title: 'Create new user'
    }
  },
  components: {
    ImageInput: ImageInput,
    Datepicker: Datepicker
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
      user: state => state.users.user,
    })
  },
  data() {
    return {
      error: false,
      is_submit: false,
      title: '',
      content: '',
      categoryId: null
    }
  },
  created() {
    this.initPage();
  },
  methods: {
    initPage() {
    },
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log('Uploading...');
          const formData = new FormData();
          formData.append('name', this.user.name);
          formData.append('fullName', this.user.fullName);
          formData.append('email', this.user.email);
          formData.append('address', this.user.address);
          formData.append('password', this.user.password);
          formData.append('birthday', this.user.birthday);
          formData.append('role', this.user.role);
          if (this.user.avatar.file) {
            formData.append('avatar', this.user.avatar.file, this.user.avatar.file.name);
          }
          
          let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';
          axios.defaults.headers.common = {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          };
          return axios({
            method: 'POST',
            url: process.env.baseUrl.concat('/api/' + constants.api.STD_USER),
            data: formData
          }).then(response => {
            VueNotifications.success({
              title: response.status + ' ' + response.statusText,
              message: 'Successfully !'
            });
            this.$router.push({ name: 'admin-users'});
          })
            .catch(error => {
              this.$store.commit("notifyError", error, { root: true });
              console.error(error);
            })
        }
      }).catch(() => {
        return false;
      });
    },
  }
}
