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
            <label for="password">Content</label>
            <textarea
              class="form-control"
              name="content"
              v-validate="'required'"
              v-model="content"
              rows="10"
              cols="50"
            />
            <div v-if="errors.has('content')" class="invalid-feedback">{{ errors.first('content') }}</div>
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

<script  src="@/business/posts/CreateBusiness.js"></script>

<style lang="scss" >
</style>

