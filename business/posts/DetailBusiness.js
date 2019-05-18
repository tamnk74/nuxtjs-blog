import markdown from 'markdown';
import { mapState } from 'vuex';

export default {
  name: 'post-detail',
  validate ({ params }) {
    const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
    return v4.test(params.id);
  },
  computed: {
    ...mapState({
      post: state => state.posts.post,
      loading: state => state.loading,
    }),
    markedContent () {
      return markdown.markdown.toHTML(this.post.content || '');
    }
  },
  created() {
    this.$store.dispatch('posts/getPost', this.$route.params.id);
  },
  methods: {
  }

}
