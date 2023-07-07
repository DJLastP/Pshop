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
              <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/itemList">주문하기</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/login">주문내역</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/join">내정보</a>
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
};
</script>

<style>
</style>