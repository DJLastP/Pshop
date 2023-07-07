<template>
  <div>
    <h3 class="text-center">Join</h3>
    <div class="row">
      <div class="col">
        <input type="text" v-model="memId">아이디
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="password" v-model="memPw">비번
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="text" v-model="memPwChk">비번확인
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="text" v-model="memTell">연락처
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button @click="regMem()">회원가입</button>
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
      memId: '',
      memPw: '',
      memPwChk: '',
      memTell: '',
    }
  },
  methods: {
    regMem(){
      let memInfo = {
        'memId': this.memId,
        'memPw': this.memPw,
        'memTell': this.memTell
      };
      console.log(memInfo);
      this.$axios.post('/api/member/join', memInfo).then(result =>{
          console.log(result);
          this.$router.push('/');
      });
    }
  },
};
</script>

<style>
</style>