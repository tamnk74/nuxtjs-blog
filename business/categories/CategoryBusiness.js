import { mapState } from 'vuex';
import constants from "@/constants";

export default {
  name: 'Categories',
  layout: 'default',
  head() {
    return {
      title: 'Categories of post'
    }
  },
  data() {
    return {
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
    initPage() {
      this.$store.dispatch('categories/getCategoryList');
    },
    getImageFullPath (category) {
      return process.env.baseUrl.concat(constants.path.CATEGORY_THUMBNAILS + '/' + category.image);
    }
  }
}
