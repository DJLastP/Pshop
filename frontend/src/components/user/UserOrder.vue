<template>
  <div>
    <button @click="getOrderList();" class="btn btn-danger">주문내역</button>
  </div>
</template>
<script>
export default {
  name: "UserOrder",
  data() {
    return {
    }},
  created() {
    this.getOrderList();
  },
  methods: {
    getOrderList(){
      this.$axios.get('/api/order/getOrderList').then((result)=>{
        console.log(result);
      });
    },
  }
}
</script>

<style>

</style>