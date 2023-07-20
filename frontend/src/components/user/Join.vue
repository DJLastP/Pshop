<template>
  <div class="row justify-content-center my-3">
    <h3 class="text-center">회원가입</h3>
    <div class="col-10 justify-content-center">
      <div class="row my-2">
        <div class="col">
          <input class="form-control" id="idInput" type="text" v-model="memInfo.memId" placeholder="아이디 입력" required>
        </div>
      </div>
      <div class="row my-2">
        <div class="col">
          <input class="form-control" type="password" v-model="memInfo.memPw" placeholder="비밀번호" required>
        </div>
      </div>
      <div class="row my-2">
        <div class="col">
          <input class="form-control" type="password" v-model="memInfo.memPwChk" placeholder="비밀번호 확인" required>
        </div>
      </div>
      <div class="row my-2">
        <div class="col">
          <input class="form-control" type="text" v-model="memInfo.memTell" placeholder="연락처" required>
        </div>
      </div>
      <div class="row my-2">
        <div class="col justify-content-center d-flex">
          <button class="btn btn-danger" :disabled="!isMatch || isAnyValueEmpty" @click="this.$store.dispatch('join', memInfo)">회원가입</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Join",
  data(){
    return{
      memInfo: {
        memId: '',
        memPw: '',
        memPwChk: '',
        memTell: '',
    }
    }
  },
  computed: {
    isMatch() {
      return this.memInfo.memPw === this.memInfo.memPwChk;
    },
    isAnyValueEmpty() {
      return Object.values(this.memInfo).some((value) => !value);
    },
  },
  methods: {
  },
};
</script>

<style>
</style>