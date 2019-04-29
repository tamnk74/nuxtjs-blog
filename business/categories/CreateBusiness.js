import { mapState, mapGetters } from 'vuex';
import axios from 'axios'
import constants from "@/constants";
import VueNotifications from 'vue-notifications'

export default {
  data() {
    return {
      title: '',
      selectedFile: null,
      imageURL: null
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories
    })
  },
  created() {
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.imageURL = URL.createObjectURL(this.selectedFile);
    },
    onUpload() {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
    },
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log('Uploading...');
          const formData = new FormData();
          formData.append('image', this.selectedFile, this.selectedFile.name);
          formData.append('title', this.title);
          let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';
          axios.defaults.headers.common = {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          };
          return axios({
            method: 'POST',
            url: process.env.baseUrl.concat('/api/' + constants.api.STD_CATEGORY),
            data: formData
          }).then(response => {
            VueNotifications.success({
              title: response.status + ' ' + response.statusText,
              message: 'Successfully !'
            });
            this.$router.push({ name: 'categories'});
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
