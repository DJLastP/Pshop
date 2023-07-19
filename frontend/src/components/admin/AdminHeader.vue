<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-danger rounded-4 rounded-top-0">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">PeterShop(관리자페이지)</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="adminNavbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active text-light">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/setItem" class="nav-link active text-light">
                상품관리
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link active text-light">
                주문내역
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/memInfo" class="nav-link active text-light">
                회원관리
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/group" class="nav-link active text-light">
                그룹관리
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
  name: "AdminHeader",
};
</script>

<style>
</style>