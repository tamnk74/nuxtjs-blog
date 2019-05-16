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
              v-model="post.title"
            >
            <div v-if="errors.has('title')" class="invalid-feedback">{{ errors.first('title') }}</div>
          </div>

          <div class="form-group">
            <label for="password">Content</label>
            <MarkdownEditor v-model="post.content" name="content"></MarkdownEditor>
            <div v-if="errors.has('content')" class="invalid-feedback">{{ errors.first('content') }}</div>
          </div>

          <div class="form-group">
            <label for="categoryId">Category</label>
            <cool-select
              name="categoryId"
              v-model="post.categoryId"
              :items="categories"
              item-value="id"
              item-text="title"
              v-validate="'required'"
              data-vv-as="category"
            >
              <template slot="item" slot-scope="{ item }">
                <div class="media">
                  <div class="media-left">
                    <img :src="getImageFullPath(item)" class="media-object" style="width:60px">
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">{{ item.title }}</h4>
                    <p>{{ item.posts.length }} posts</p>
                  </div>
                </div>
              </template>
            </cool-select>
            <div
              v-if="errors.has('categoryId')"
              class="invalid-feedback"
            >{{ errors.first('categoryId') }}</div>
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

<script  src="@/business/myposts/EditBusiness.js"></script>

<style lang="scss" >
</style>

