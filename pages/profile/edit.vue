<template>
  <div class="container">
    <div class="panel panel-success">
      <div class="panel-heading">Profile</div>
      <!-- Panel body -->
      <div class="panel-body">
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="form-group">
                <label for="avatar">Change your avatar</label>
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
                  format="dd-MMM-yyyy"
                  input-class="form-control"
                ></datepicker>
                <div
                  v-if="errors.has('birthday')"
                  class="invalid-feedback"
                >{{ errors.first('birthday') }}</div>
              </div>
              <div class="form-group">
                <label for="oldPassword">Current Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  class="form-control"
                  v-model="user.oldPassword"
                >
                <div v-if="errors.has('oldPassword')" class="invalid-feedback">{{ errors.first('oldPassword') }}</div>
              </div>
              <div class="form-group">
                <label for="password">New Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  v-validate="'confirmed:confirmation'"
                  v-model="user.password"
                >
                <div v-if="errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  class="form-control"
                  ref="confirmation"
                  v-model="user.confirmPassword"
                >
                <div v-if="errors.has('confirmPassword')" class="invalid-feedback">{{ errors.first('confirmPassword') }}</div>
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
</template>

<script  src="@/business/profile/EditBusiness.js"></script>

<style lang="scss" >
@import "./assets/scss/profile";
</style>