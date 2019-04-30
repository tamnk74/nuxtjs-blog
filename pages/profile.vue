<template>
  <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <h4>{{ getName }}</h4>
                        <small><cite title="San Francisco, USA">San Francisco, USA <i class="glyphicon glyphicon-map-marker">
                        </i></cite></small>
                        <p>
                            <i class="glyphicon glyphicon-envelope"></i>{{ user.email }}
                            <br />
                            <i class="glyphicon glyphicon-globe"></i>{{ user.role }}
                            <br />
                            <i class="glyphicon glyphicon-gift"></i>June 02, 1988</p>
                        <!-- Split button -->
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">Social</button>
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"></button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Google +</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Github</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: 'Profile',
  data () {
    return {
    }
  },
  created () {
    const jsonUser = localStorage.getItem('user');
    this.user = jsonUser && JSON.parse(jsonUser);
    this.$store.dispatch('auth/check');
  },
  computed: {
    ...mapGetters({
      getName: 'auth/getName',
    }),
    ...mapState({
      authenticated: state => state.auth.authenticated,
      user: state => state.auth.user,
    })
  },
  methods: {
  }
}
</script>

<style scoped>
.glyphicon {  margin-bottom: 10px;margin-right: 10px;}

small {
  display: block;
  line-height: 1.428571429;
  color: #999;
}
</style>
