<template>
  <div>
    <div class="row justify-content-center d-flex my-2">
      <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header text-center">최근 주문 : {{ orderList.date }}</div>
        <div class="card-body pb-0">
          <table class="table text-center table-bordered">
            <tr v-for="(name ,index) in itemName" :key="index">
              <td>{{ itemName[index] }} : {{ orderCnt[index] }}</td>
              <td>단가 : {{ orderPrice[index].toLocaleString() }}</td>
            </tr>
          </table>
          <h3 class="card-title text-end mt-4">총 {{ totalPrice }}원</h3>
        </div>
        <p class="card-title text-end">누적 주문 횟수 {{ orderCount }}회</p>
      </div>
    </div>
    <div class="row justify-content-center d-flex my-2 text-center">
      <div class="col-8">
        <table class="table">
          <tr>
            <td class="text-center">아이디 : </td>
            <td class="text-center"> {{ memInfo.memId }}</td>
          </tr>
          <tr>
            <td class="text-center">연락처 : </td>
            <td class="text-center"> {{ memInfo.memTell }}</td>
          </tr>
          <tr>
            <td class="text-center">가입일 : </td>
            <td class="text-center"> {{ memInfo.regDate }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row justify-content-center d-flex my-2 text-center">
      <button class="btn btn-danger" @click="this.$store.dispatch('logout')">로그아웃</button>
    </div>
  </div>
</template>
<script>

import moment from "moment";

export default {
  name: "myPage",
  data() {
    return {
      orderPrice: [],
      itemName: [],
      orderCnt: [],
      totalPrice: 0,
      orderList: {},
      memInfo: {},
      orderCount: 0,
    }
  },
  created() {
    this.getMyPage();
  },
  methods : {
    async getMyPage(){
      await this.$axios.get('/api/member/getMyPage').then(result => {
        this.orderList = result.data.orderList;
        this.totalPrice = result.data.orderList.totalPrice.toLocaleString();
        this.memInfo = result.data.mem
        this.orderCount = result.data.orderCount;
        this.setData();
      })
    },
    setData() {
      const keys = Object.keys(this.orderList.orderPrice);
      this.itemCnt = keys.length;
      keys.forEach((key, index) => {
        this.orderPrice[index] = this.orderList.orderPrice[key]
        this.orderCnt[index] = this.orderList.orderCnt[key]
        this.itemName[index] = key
      });
      this.orderList.date = moment(this.orderList.date).utcOffset('+09:00').format('YY-MM-DD HH:mm');
      this.memInfo.regDate = moment(this.memInfo.regDate).utcOffset('+09:00').format('YY-MM-DD HH:mm');

    },
  },
}
</script>
<style>
</style>