<template>
  <div>
    <h3 class="text-center">Join</h3>
    <div class="row">
      <div class="col">
        <input type="text" v-model="memInfo.memId">아이디
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="password" v-model="memInfo.memPw">비번
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="text" v-model="memInfo.memPwChk">비번확인
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="text" v-model="memInfo.memTell">연락처
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button @click="this.$store.dispatch('join', memInfo)">회원가입</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Join",
  data(){
    return{
      //memInfo: { 'memId': memId , 'memPw': this.memPw },
      memInfo: {
        memId: '',
        memPw: '',
        memPwChk: '',
        memTell: '',
    }
    }
  },
  methods: {
  },
};
</script>

<style>
</style>