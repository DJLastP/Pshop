<template>
  <div>
    <h3 class="text-center my-3">주문 내역</h3>
    <div v-for="(card, index) in cardData" :key="index" class="row justify-content-center d-flex my-2">
      <OrderCard :orderList="card" :totalPrice="card.totalPrice"></OrderCard>
    </div>
  </div>
</template>
<script>
import moment from "moment/moment";
import OrderCard from "./orderCard.vue";
export default {
  name: "UserOrder",
  data() {
    return {
      cardData: [],
    }},
  components: {
    OrderCard
  },
  created() {
    this.getUserOrder();
  },
  methods: {
    getUserOrder(){
      this.$axios.get('/api/order/getUserOrder').then((result)=>{
        this.cardData = result.data;
        result.data.forEach((data, index) => {
          this.cardData[index].date = moment(data.date).utcOffset('+09:00').format('YY-MM-DD HH:mm');
        });
      });
    },
  }
}
</script>

<style>

</style>