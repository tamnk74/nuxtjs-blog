<template>
  <div class="container">
    <div class="main-content">
      <div class="row">
        <div class="col-sm-12">
          <nuxt-link :to="{ name: 'admin-users-create'}" class="btn btn-success">Create</nuxt-link>
        </div>
      </div>
      <div class="alert alert-info" v-if="users.length <= 0">
        <strong>Whoops! </strong> There is no user!
      </div>

      <table v-else class="table table-hover">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>email</th>
            <th>Fullname</th>
            <th>Address</th>
            <th>Birthday</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td><img :src="getAvatarFullPath(user)" alt="Avatar" class="avatar-icon"></td>
            <td><nuxt-link :to="{name: 'admin-users-id', params: {id: user.id}}">{{ user.name }}</nuxt-link></td>
            <td>{{ user.fullName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address }}</td>
            <td>{{ formatDate(user.birthday) }}</td>
            <td>
              <nuxt-link
                :to="{name: 'admin-users-id-edit', params: { id: user.id }}"
                class="btn btn-primary"
              >Edit</nuxt-link>
              <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script  src="@/business/admin/users/IndexBusiness.js"></script>
<style lang="scss" scoped>
.avatar-icon {
  width: 50px;
  height: 50px;
}
</style>

