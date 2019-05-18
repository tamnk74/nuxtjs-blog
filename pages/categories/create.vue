<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-info">
        <div class="panel-heading">New Post</div>
        <div class="panel-body">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                class="form-control"
                v-validate="'required'"
                v-model="category.title"
              >
              <div v-if="errors.has('title')" class="invalid-feedback">{{ errors.first('title') }}</div>
            </div>

            <div class="form-group">
              <label>Image</label>
              <image-input v-model="category.image" name="image" v-validate="'required'">
                <div slot="activator">
                  <div v-if="!category.image" class="pick-thumbnail">
                    <span>Pick a thumbnail</span>
                  </div>
                  <div v-else class="thumbnail">
                    <img :src="category.image.url" alt="avatar">
                  </div>
                </div>
              </image-input>
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

