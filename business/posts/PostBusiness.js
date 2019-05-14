import markdown from 'markdown';
import moment from 'moment';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      posts: state => state.posts.posts,
      key: state => state.key || '',
    }),
    filteredPosts: () => {
      return this.posts.filter(post => post.title.match(this.key));
    }
  },
  created() {
    this.initPage();
  },
  methods: {
    formatDate (datetime) {
      return moment(datetime).format('DD-MMM-YYYY');
    },
    shortContent (post) {
      let content = document.createElement("div")
      content.innerHTML = markdown.markdown.toHTML(post.content || '');
      return content.textContent.slice(0, 280);
    },
    initPage () {
      this.$store.dispatch('posts/getPostList');
    }
  }
}
