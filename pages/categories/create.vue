<template>
  <div class="container">
    <div class="panel panel-default width-100">
      <div class="panel-heading">New Post</div>
      <div class="panel-body">
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              name="title"
              class="form-control"
              v-validate="'required'"
              v-model="title"
            >
            <div v-if="errors.has('title')" class="invalid-feedback">{{ errors.first('title') }}</div>
          </div>

          <div class="form-group">
            <label for="image">Image</label>
            <input
              type="file"
              class="hidden"
              name="image"
              v-validate="'required'"
              @change="onFileSelected"
              ref="imageInput"
            >
            <button type="button" @click="$refs.imageInput.click()">Pick an image</button>
            <div v-if="selectedFile" id="preview">
              <img :src="imageURL" alt="Thumbnail">
            </div>
            <div v-if="errors.has('image')" class="invalid-feedback">{{ errors.first('image') }}</div>
          </div>

          <div class="form-group">
            <div class="col-md-8 col-md-offset-4">
              <button type="button" class="btn btn-primary" @click="onSubmit()">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script  src="@/business/categories/CreateBusiness.js"></script>

<style scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 50%;
  max-height: auto;
}
</style>

