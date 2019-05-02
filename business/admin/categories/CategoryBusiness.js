import { mapState } from 'vuex';

export default {
  name: 'admin-categories',
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
    initPage() {
      this.$store.dispatch('categories/getCategoryList');
    },
    getImageFullPath (category) {
      return process.env.baseUrl.concat('/uploads/' + category.image);
    },
    deleteCategory (id) {
      if (confirm('Are you sure to delete this category')) {
        this.$store.dispatch('categories/deleteCategory', id);
        this.$router.push({name: 'admin-categories'})
      }
    }
  }
}
