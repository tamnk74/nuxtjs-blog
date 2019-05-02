<template>
  <div class="container">
    <div class="main-content">
      <table v-if="view != 'kanban'" class="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td><img :src="getImageFullPath(category)" class="media-object" style="width:60px"></td>
            <td>{{ category.title }}</td>
            <td>
              <nuxt-link
                :to="{name: 'admin-categories-id-edit', params: { id: category.id }}"
                class="btn btn-primary"
              >Edit</nuxt-link>
            </td>
            <td>
              <button class="btn btn-danger" @click="deleteCategory(category.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="view == 'kanban'" class="list-kanban">
        <div class="list-item" v-for="(category, index) in categories" :key="index">
          <nuxt-link :to="{name: 'categories-id', params: {id: category.id}}">
            <img :src="getImageFullPath(category)" class="thumbnail">
            <h3>{{ category.title }} <small>{{ category.posts.length }} <i class="fas fa-paste"></i></small></h3>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script  src="@/business/admin/categories/CategoryBusiness.js"></script>
