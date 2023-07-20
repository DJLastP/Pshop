<template>
  <div class="row justify-content-center d-flex my-2">
      <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header text-center">주문일자 :{{ orderList.date }}</div>
        <div class="card-body">
          <table class="table text-center table-bordered">
            <tr v-for="(name ,index) in itemName" :key="index">
              <td>{{ itemName[index] }} : {{ orderCnt[index] }}</td>
              <td>단가 : {{ orderPrice[index].toLocaleString() }}</td>
            </tr>
          </table>
          <h5 class="card-title text-end mt-4">총 {{ totalPrice.toLocaleString() }}원</h5>
        </div>
      </div>
  </div>
</template>
<script>

export default {
  name: "orderCard",
  data() {
    return {
      orderPrice: [],
      itemName: [],
      orderCnt: [],
    }},
  props: { orderList: Object,
          totalPrice: Number,
  },
  created() {
    this.setData()
  },
  methods: {
    setData(){
      const keys = Object.keys(this.orderList.orderPrice);
      this.itemCnt = keys.length;
      keys.forEach((key, index)=>{
        this.orderPrice[index] = this.orderList.orderPrice[key]
        this.orderCnt[index] = this.orderList.orderCnt[key]
        this.itemName[index] = key
      });
    },

  }
}
</script>

<style>

</style>