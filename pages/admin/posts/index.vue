<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-success">
        <div class="panel-heading">
          <div class="row">
            <div class="col-sm-10">
              <h4>All Posts</h4>
            </div>
            <div class="col-sm-2 text-right">
              <nuxt-link :to="{ name: 'admin-posts-create'}" class="btn btn-success">Create</nuxt-link>
            </div>
          </div>
        </div>
        <div class="panel-body">
          <div class="overlay" v-show="loading">
            <i class="fa fa-sync rotating"></i>
          </div>
          <div class="alert alert-info" v-if="posts.length <= 0">
            <strong>Whoops!</strong> There is no post!
          </div>
          <table v-else class="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Content</th>
                <th style="min-width: 150px">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post.id">
                <td>
                  <nuxt-link :to="{name: 'admin-posts-id', params: {id: post.id}}">{{ post.id }}</nuxt-link>
                </td>
                <td>{{ post.title }}</td>
                <td>{{ shortContent(post) }}</td>
                <td>
                  <nuxt-link
                    :to="{name: 'admin-posts-id-edit', params: { id: post.id }}"
                    class="btn btn-primary"
                  >Edit</nuxt-link>
                  <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row text-center">
          <paginate
            :page-count="pageTotal"
            :page-range="5"
            :margin-pages="2"
            :click-handler="changePage"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          ></paginate>
        </div>
      </div>
    </div>
  </div>
</template>
<script  src="@/business/admin/posts/PostBusiness.js"></script>
