<template>
  <div>
    <h3 class="text-center my-3">전체주문내역</h3>
    <div v-for="(card, index) in cardData" :key="index" class="row justify-content-center d-flex my-2">
      <span class="text-center my-0">회원이름 : {{ card.memId }}  주문상태 : ???</span>
      <OrderCard :orderList="card" :totalPrice="card.totalPrice"></OrderCard>
    </div>
  </div>
</template>

<script>
import OrderCard from "@/components/user/orderCard.vue";
import moment from "moment";

export default {
  name: "OrderList",
  components: {OrderCard},
  data() {
    return {
      cardData: [],
    }},
  created() {
    this.getOrderList();
  },
  methods: {
    getOrderList(){
      this.$axios.get('/api/order/getOrderList').then((result)=>{
        this.cardData = result.data;
        result.data.forEach((data, index) => {
          this.cardData[index].date = moment(data.date).utcOffset('+09:00').format('YY-MM-DD HH:mm');
        });
      });
    },
  }
};
</script>

<style>
</style>