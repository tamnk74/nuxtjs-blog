import {mapState, mapGetters} from 'vuex';

export default {
  data() {
    return {
      title: '',
      selectedFile: null,
      imageURL: null
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories
    })
  },
  created() {
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0];
      this.imageURL = URL.createObjectURL(this.selectedFile);
    },
    onUpload() {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
      
    },
    onSubmit () {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log('Uploading...');
        }
      }).catch(e => {
        return false;
      });
    },
  }
}
