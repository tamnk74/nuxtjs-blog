import {mapState} from 'vuex';
import axios from 'axios';
import constants from "@/constants";
import VueNotifications from 'vue-notifications';
import ImageInput from '@/components/ImageInput';

export default {
  name: 'admin-categories-create',
  middleware: 'admin',
  layout: 'default',
  components: {
    ImageInput: ImageInput
  },
  data() {
    return {
      category: {}
    }
  },
  methods: {
    /**
     * Load default image
     *
     * @param event
     */
    loadDefaultImage(event) {
      debugger;
      event.target.src = '123';
    },
    /**
     * Get form data
     * @returns {FormData}
     */
    getFormData() {
      const formData = new FormData();
      formData.append('image', this.category.image.file, this.category.image.file.name);
      formData.append('title', this.category.title);
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
            method: 'POST',
            url: process.env.baseUrl.concat('/api/' + constants.api.STD_CATEGORY),
            data: this.getFormData()
          })
            .then(response => {
              VueNotifications.success({
                title: response.status + ' ' + response.statusText,
                message: 'Successfully !'
              });
              this.$router.push({name: 'admin-categories'});
            })
            .catch(error => {
              this.$store.commit("notifyError", error, {root: true});
            })
        }
      }).catch(e => {
        return false;
      });
    },
  }
}
