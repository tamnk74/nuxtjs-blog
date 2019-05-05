<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="well well-sm">
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="form-group"  v-if="user">
                <label for="avatar">Avatar</label>
                <image-input v-model="user.avatar" name="avatar">
                  <div slot="activator">
                    <div v-if="!user.avatar" class="pick-thumbnail">
                      <span>Pick a thumbnail</span>
                    </div>
                    <div v-else class="thumbnail">
                      <img :src="user.avatar.url || getAvatarFullPath(user)" alt="avatar">
                    </div>
                  </div>
                </image-input>
              </div>
              <img v-else src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
            </div>
            <div v-if="user" class="col-sm-6 col-md-8">
              <div class="form-group">
                <label for="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  class="form-control"
                  v-validate="'required'"
                  v-model="user.fullName"
                >
                <div
                  v-if="errors.has('fullName')"
                  class="invalid-feedback"
                >{{ errors.first('fullName') }}</div>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  name="address"
                  class="form-control"
                  v-model="user.address"
                >
                <div
                  v-if="errors.has('address')"
                  class="invalid-feedback"
                >{{ errors.first('address') }}</div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  v-validate="'required'"
                  v-model="user.email"
                >
                <div v-if="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
              </div>
              <div class="form-group">
                <label for="birthday">Birthday</label>
                <datepicker
                  v-model="user.birthday"
                  name="birthday"
                  format="yyyy-MM-dd"
                  input-class="form-control"
                ></datepicker>
                <div
                  v-if="errors.has('birthday')"
                  class="invalid-feedback"
                >{{ errors.first('birthday') }}</div>
              </div>
            </div>
          </div>
          <div class="row action">
            <div>
              <button type="button" @click="onSubmit()" class="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  src="@/business/profile/EditBusiness.js"></script>

<style lang="scss" >
@import "./assets/scss/profile";
</style>