import {mapState} from 'vuex';
import constants from "@/constants";

export default {
  name: 'admin-categories',
  middleware: 'admin',
  layout: 'default',
  head() {
    return {
      title: 'All categories'
    }
  },
  data() {
    return {
      view: 'list'
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
     * Load all categories
     */
    initPage() {
      this.$store.dispatch('categories/getCategoryList');
    },
    /**
     * Get full path image of category
     * @param category
     * @returns {string}
     */
    getImageFullPath(category) {
      return process.env.baseUrl.concat(constants.path.CATEGORY_THUMBNAILS + '/' + category.image);
    },
    /**
     * Remove a category
     * @param {string} id
     */
    deleteCategory(id) {
      if (confirm('Are you sure to delete this category')) {
        this.$store.dispatch('categories/deleteCategory', id);
        this.$router.push({name: 'admin-categories'})
      }
    }
  }
}
