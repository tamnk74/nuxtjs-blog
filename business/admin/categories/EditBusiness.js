import { mapState, mapGetters } from 'vuex';
import axios from 'axios'
import constants from "@/constants";
import VueNotifications from 'vue-notifications'
import ImageInput from '@/components/ImageInput.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    ImageInput: ImageInput
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories
    }),
    category: function() {
      const categoryId = this.$route.params.id;
      const categoryFilter = this.categories.filter(category => category.id === categoryId);
      return categoryFilter && categoryFilter[0] || {};
    }
  },
  created() {
    this.initPage();
  },
  methods: {
    initPage() {
      this.$store.dispatch('categories/getCategoryList');
    },
    getImageFullPath (category) {
      return process.env.baseUrl.concat('/uploads/' + category.image);
    },
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log('Uploading...');
          const formData = new FormData();
          formData.append('image', this.image.file, this.image.file.name);
          formData.append('title', this.title);
          let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';
          axios.defaults.headers.common = {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          };
          return axios({
            method: 'PUT',
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
