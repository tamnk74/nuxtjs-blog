<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <!-- Collapsed Hamburger -->
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#app-navbar-collapse"
        >
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <!-- Branding Image -->
        <nuxt-link to="/" class="navbar-brand">Blog</nuxt-link>
      </div>

      <ul class="collapse navbar-collapse" id="app-navbar-collapse">
        <!-- Left Side Of Navbar -->
        <ul class="nav navbar-nav">
          <li class>
            <nuxt-link to="/posts" class="nav-link">Posts</nuxt-link>
          </li>
          <li class>
            <nuxt-link to="/categories" class="nav-link">Categories</nuxt-link>
          </li>
          <li class>
            <nuxt-link to="/tags" class="nav-link">Tags</nuxt-link>
          </li>
        </ul>
        <div class="col-sm-3 col-md-3">
          <form class="navbar-form" role="search">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" name="q" value>
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                  <!-- <i class="glyphicon glyphicon-search"></i> -->
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <!-- Right Side Of Navbar -->
        <ul class="nav navbar-nav navbar-right">
          <li v-if="authenticated" class="dropdown">
            <a
              class="dropdown-toggle"
              id="navbarDropdownMenuAdminLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Administration
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li>
                <nuxt-link to="/admin/posts" class="dropdown-item">All posts</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin/categories" class="dropdown-item">All categories</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin/users" class="dropdown-item">All users</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin/tags" class="dropdown-item">All tags</nuxt-link>
              </li>
            </ul>
          </li>
          <!-- Authentication Links -->
          <li v-if="authenticated" class="dropdown">
            <a
              class="dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ user.fullName }}
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li>
                <nuxt-link to="/profile" class="dropdown-item">Profile</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/posts/create" class="dropdown-item">New post</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/categories/create" class="dropdown-item">New Category</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/mypost" class="dropdown-item">My post</nuxt-link>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click="logout">Logout</a>
              </li>
            </ul>
          </li>
          <li v-else class="nav-item">
            <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
          </li>
        </ul>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "NavbarMenu",
  data() {
    return {};
  },
  async asyncData ({ params }) {
    console.log('%c Navbar asyncData ...', 'color: blue');
    return { com: 'Com'};
  },
  created() {
    console.log('%c Navbar created ...', 'color: blue');
    this.$store.dispatch("auth/check");
  },
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated,
      user: state => {
        console.log('%c Navbar computed ...', 'color: blue');
        return state.auth.user;
      }
    })
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>
<style scoped>
.navbar-collapse {
  margin-bottom: 0px;
}
.nuxt-link-exact-active{
  border-bottom: 2px solid #1bb3ba61;
}
</style>
