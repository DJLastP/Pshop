<template>
  <div>
    <h2 class="text-center mt-3">공지사항</h2>
<!--    로그인시 홈화면-->
    <div class="row justify-content-center">
      <div class="col d-flex justify-content-center">
        <p>{{ notify }}</p>
      </div>
    </div>


    <div v-if="$store.state.memRole === 1">
      <div class="row justify-content-center my-3">
        <div class="col col-10 d-flex justify-content-center">
          <textarea class="form-control" v-model="notify"></textarea>
        </div>
      </div>
      <div class="row justify-content-center my-3">
        <div class="col-10 d-flex justify-content-center">
          <button class="btn btn-danger" @click="setNotify">저 장</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "home",
  data(){
    return{
      notify: '공지사항',
      date: null,
    }
  },
  created() {
    this.getNotify();
  },
  methods: {
    getNotify(){
      this.$axios.get('/api/member/getNotify').then(result => {
        this.notify = result.data.notify;
      })
    },
    setNotify(){
      this.$axios.post('/api/member/setNotify', { 'notify': this.notify } ).then(() => {
        alert('공지 등록 완료');
      })
    },

  },
}
</script>
<style>
</style>