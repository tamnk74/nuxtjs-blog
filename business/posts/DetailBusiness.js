import markdown from 'markdown';
import constant from '@/constants';
import { get } from '@/plugins/api';
import { mapState } from 'vuex';

export default {
  validate ({ params }) {
    const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
    return v4.test(params.id);
  },
  computed: {
    ...mapState({
      post: state => state.posts.post,
    }),
    markedContent () {
      return markdown.markdown.toHTML(this.post.content || '');
    }
  },
  created() {
    this.initPage();
  },
  methods: {
    initPage () {
      get(constant.api.GET_POST_DETAIL + '/' +this.$route.params.id).then(result => {
        this.post = result.data.data;
      })
    }
  }

}
