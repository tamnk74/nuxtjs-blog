<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-info">
        <div class="panel-heading">
          <div class="row">
            <div class="col-sm-10">
              <h4>Create New Posts</h4>
            </div>
            <div class="col-sm-2 text-right">
              <nuxt-link :to="{ name: 'myposts'}" class="btn btn-default">Cancel</nuxt-link>
            </div>
          </div>
        </div>
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
              <div
                v-if="errors.has('content')"
                class="invalid-feedback"
              >{{ errors.first('content') }}</div>
            </div>

            <div class="form-group">
              <label for="categoryId">Category</label>
              <cool-select
                name="categoryId"
                v-model="categoryId"
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
  </div>
</template>

<script  src="@/business/posts/CreateBusiness.js"></script>

<style lang="scss" >
</style>

