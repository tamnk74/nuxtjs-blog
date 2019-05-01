<template>
  <div class="thumbnail-section">
    <div @click="launchFilePicker()" >
      <slot name="activator"></slot>
    </div>
    <button type="button" class="btn btn-remove" @click="removeFile" v-if="file"><i class="fas fa-backspace"></i></button>
    <input
      type="file"
      ref="file"
      :name="name"
      @change="onFileChange(
          $event.target.name, $event.target.files)"
      style="display:none"
    >
  </div>
</template>

<script>
export default {
  name: "image-input",
  data: () => ({
    maxSize: 1024,
    file: null
  }),
  props: {
    name: '',
    value: Object
  },
  methods: {
    launchFilePicker() {
      this.$refs.file.click();
    },
    removeFile(){
      this.file = null;
      this.$refs.file.value = null;
      this.$emit("input", null);
    },
    onFileChange(fieldName, files) {
      const { maxSize } = this;
      let file = files[0];

      // Check if user actually selected a file
      if (files.length > 0) {
        let size = file.size / maxSize / maxSize;
        if (!file.type.match("image.*")) {
          // Check whether the upload is an image
          alert("Please choose an image file");
        } else if (size > 1) {
          // Check whether the size is greater than the size limit
          alert("Your file is too big! Please select an image under 1MB");
        } else {
          // Append file into FormData & turn file into image URL
          this.file = file;
          let url = URL.createObjectURL(file)
          // Emit FormData & image URL to the parent component
          this.$emit("input", { file, url });
        }
      }
    }
  }
};
</script>

<style scoped>
.thumbnail-section {
  position: relative;
  width: 240px;
  height: 200px;
}
.thumbnail-section .btn-remove{
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>
