import {mapState} from 'vuex';
import constants from "@/constants";

export default {
  name: 'categories',
  layout: 'default',
  head() {
    return {
      title: 'Categories of post'
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories,
    })
  },
  created() {
    this.initPage();
  },
  methods: {
    /**
     * Load data
     */
    initPage() {
      this.$store.dispatch('categories/getCategoryList');
    },
    /**
     * Get full thumbnail path
     * @param category
     * @returns {string}
     */
    getImageFullPath(category) {
      return process.env.baseUrl.concat(constants.path.CATEGORY_THUMBNAILS + '/' + category.image);
    }
  }
}
