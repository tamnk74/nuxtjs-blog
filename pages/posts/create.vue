<template>
  <div class="container">
      <div class="panel panel-default width-100">
          <div class="panel-heading">New Post</div>
          <div class="panel-body">
              <form class="form-horizontal" role="form">
                  <div class="form-group">
                      <label for="email" class="col-md-3 control-label">Title</label>
                      <div class="col-md-9">
                          <input type="text" name="title" class="form-control" v-validate="'required'" v-model="title"></div>
                          <small v-if="errors.has('title')" class="field-text is-danger">{{ errors.first('title') }}</small>
                  </div>

                  <div class="form-group">
                      <label for="password" class="col-md-3 control-label">Content</label>
                      <div class="col-md-9">
                        <textarea class="form-control" name="content" v-validate="'required'" v-model="content" rows="10" cols="50"/>
                        <small v-if="errors.has('content')" class="field-text is-danger">{{ errors.first('content') }}</small>
                      </div>
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

<style scope>
.width-100 {
  width: 100%
}
</style>
