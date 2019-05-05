<template>
  <div class="container">
    <div class="main-content">
      <div class="alert alert-info" v-if="posts.length <= 0">
        <strong>Whoops! </strong> There is no post!
      </div>

      <table v-else class="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td><nuxt-link :to="{name: 'admin-posts-id', params: {id: post.id}}">{{ post.id }}</nuxt-link></td>
            <td>{{ post.title }}</td>
            <td>{{ shortContent(post) }}</td>
            <td>
              <nuxt-link
                :to="{name: 'admin-posts-id-edit', params: { id: post.id }}"
                class="btn btn-primary"
              >Edit</nuxt-link>
            </td>
            <td>
              <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script  src="@/business/admin/posts/PostBusiness.js"></script>
