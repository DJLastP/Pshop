<template>
  <div class="bg-danger row text-white">
      <div class="col-3 col-div py-2 ps-4 d-flex flex-column align-items-center justify-content-center" @click="goPage('/')">
          <i class="bi bi-house-door"></i>
          <span>Home</span>
      </div>
      <div class="col-3 col-div d-flex flex-column align-items-center justify-content-center"  @click="goPage('/order')">
          <i class="bi bi-cart2"></i>
          <span>주문하기</span>
      </div>
      <div class="col-3 col-div d-flex flex-column align-items-center justify-content-center" @click="goPage('/userOrder')">
          <i class="bi bi-file-earmark-text"></i>
          <span>주문내역</span>
      </div>
      <div class="col-3 pe-4 d-flex flex-column align-items-center justify-content-center" @click="goPage('/myPage')">
          <i class="bi bi-person"></i>
          <span>내 정보</span>
      </div>
  </div>
</template>

<script>

export default {
  name: "menu",
  methods: {
    goPage(to){
      this.$router.push(to);
    }
  }
};
</script>

<style>
.row > .col-div {
  border-right: 1px solid black;
}
</style>
