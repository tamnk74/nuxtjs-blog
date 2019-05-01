import { mapState } from 'vuex';

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
      return process.env.baseUrl.concat('/uploads/' + category.image);
    }
  }
}
