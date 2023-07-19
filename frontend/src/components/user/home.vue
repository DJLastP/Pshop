<template>
  <div>
    <h2 class="text-center mt-3">PeterShop</h2>
<!--    로그인시 홈화면-->
    <div v-if="$store.state.isLogin" class="row justify-content-center">
      <div class="col-4 d-flex justify-content-center">
        <router-link to="/order" class="nav-link active text-light">
          <button class="btn btn-danger">주문하기</button>
        </router-link>
      </div>
      <div class="col-4 d-flex justify-content-center">
        <router-link to="/orderList" class="nav-link active text-light">
          <button class="btn btn-danger">주문내역</button>
        </router-link>
      </div>
    </div>

    <!--    비로그인시 홈화면-->
    <div v-if="!$store.state.isLogin" class="row justify-content-center">
      <div class="col-4 d-flex justify-content-center">
        <router-link to="/login" class="nav-link active text-light">
          <button class="btn btn-danger">로그인</button>
        </router-link>
      </div>
      <div class="col-4 d-flex justify-content-center">
        <router-link to="/join" class="nav-link active text-light">
          <button class="btn btn-danger">회원가입</button>
        </router-link>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "home",
}
</script>
<style>
</style>