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
              <a class="nav-link active text-light" aria-current="page" href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/setItem">상품관리</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="">주문내역</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">회원관리</a>
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