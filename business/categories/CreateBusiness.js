import {mapState} from 'vuex';
import constants from "@/constants";
import VueNotifications from 'vue-notifications';
import ImageInput from '@/components/ImageInput.vue';
import {post} from "@/plugins/api";

export default {
  name: 'categories-create',
  layout: 'default',
  components: {
    ImageInput: ImageInput
  },
  computed: {
    ...mapState({
      category: state => state.categories.category
    })
  },
  methods: {
    /**
     * GEt form data
     *
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
          const formData = this.getFormData();
          return post(constants.api.STD_CATEGORY, formData)
            .then(response => {
              VueNotifications.success({
                title: response.status + ' ' + response.statusText,
                message: 'Successfully !'
              });
              this.$router.push({name: 'categories'});
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
