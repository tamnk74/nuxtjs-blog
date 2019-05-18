import markdown from 'markdown';
import moment from 'moment';
import {mapState} from 'vuex';

export default {
  name: 'my-posts',
  layout: 'default',
  middleware: 'authenticated',
  computed: {
    ...mapState({
      posts: state => state.posts.myposts,
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
    /**
     * Format date
     *
     * @param datetime
     * @returns {string}
     */
    formatDate(datetime) {
      return moment(datetime).format('DD-MMM-YYYY');
    },
    /**
     * Get short html text content
     *
     * @param post
     * @returns {string}
     */
    shortContent(post) {
      let content = document.createElement("div")
      content.innerHTML = markdown.markdown.toHTML(post.content || '');
      return content.textContent.slice(0, 280);
    },
    /**
     * Load data
     */
    initPage() {
      this.$store.dispatch('posts/getMyPostList');
    },
    /**
     * Remove post
     *
     * @param id
     */
    deletePost(id) {
      if (confirm('Are you sure to delete this post')) {
        this.$store.dispatch('posts/deleteMyPost', id);
        this.$router.push({name: 'myposts'})
      }
    }
  }
}
