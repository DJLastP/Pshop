<template>

  <div class="row my-3 justify-content-center d-flex">
    <h3 class="text-center">Login</h3>
    <div class="row justify-content-center d-flex">
      <div class="col-6 text-center">
        <label for="idInput" class="form-label">ID</label>
        <input v-model="memInfo.memId" type="text" id="idInput" class="form-control">
      </div>
    </div>
    <div class="row justify-content-center d-flex">
      <div class="col-6 text-center">
        <label for="pwInput" class="form-label">Password</label>
        <input v-model="memInfo.memPw" type="password" id="pwInput" class="form-control">
      </div>
    </div>
    <div class="row my-3 justify-content-center d-flex">
      <div class="col-6 text-center">
        <button @click="this.$store.dispatch('login', memInfo)"  class="btn btn-danger mx-5">Login</button>
      </div>
    </div>
    <div class="row my-3 justify-content-center d-flex">
      <div class="col-6 text-center">
        <router-link to="/join">
          <button class="btn btn-danger">Join</button>
        </router-link>
      </div>
    </div>
  </div>


</template>
<script>
export default {
  name: "Login",
  data(){
    return {
     memInfo: {
        memId: '',
        memPw: '',
      }
    }
  },
  methods: {

  },
};
</script>
<style></style>