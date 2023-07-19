<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-danger rounded-4 rounded-top-0">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">PeterShop</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active text-light">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/order" class="nav-link active text-light">
                주문하기
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/userOrder" class="nav-link active text-light">
                주문내역
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/join" class="nav-link active text-light">
                내정보
              </router-link>
            </li>
            <li class="nav-item">
              <a @click="this.$store.dispatch('logout')" class="nav-link active text-light">
                로그아웃
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "UserHeader",
  data(){
    return {
    }
  },
  methods: {
  },
};
</script>

<style>
</style>