<template>
  <div>
    <div>
      <h3 class="text-center">주문하기</h3>
      <div class="row my-2 justify-content-center">
        <div class="col-10">
          <table class="table text-center">
            <colgroup>
              <col width="20%">
              <col width="*">
              <col width="20%">
              <col width="20%">
            </colgroup>
            <thead>
              <tr>
                <td>품명</td>
                <td>가격</td>
                <td>재고</td>
                <td>주문</td>
              </tr>
            </thead>
            <tbody>
              <tr class="align-items-center" v-for="index in itemCnt" :key="index">
                <td class="align-middle">
                  <span>{{itemName[index - 1]}}</span>
                </td>
                <td class="align-middle">{{itemPrices[index - 1]}}</td>
                <td class="align-middle">{{itemStock[index - 1]}}</td>
                <td>
                  <input @input="getTotalPrice()" v-model="order[index - 1]" type="number" class="form-control text-center">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10 d-flex justify-content-center">
          <span class="text-end">
            총 가격 : {{ totalPrice.toLocaleString() }}원
          </span>
        </div>
      </div>
      <div class="row justify-content-center my-3">
        <div class="col-4 d-flex justify-content-center">
          <button class="btn btn-danger" @click="setOrder()">주문</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import moment from "moment/moment";

export default {
  name: "order",
  data() {
    return {
      order: [],
      totalPrice: 0,
      itemCnt: 0,
      itemPrices: [],
      itemStock: [],
      itemName: [],
    }
  },
  created() {
    this.getItemPrice()
  },
  methods: {
    getItemPrice(){
      const accessToken = localStorage.getItem('accessToken');
      this.$axios.post('/api/item/getItemPrice', {accessToken,}).then(result => {
        this.setData(result.data);
      }).catch(() => {
        alert('주문 실패');
        this.$router.go(0);
      })
    },
    setData(data){
      const keys = Object.keys(data.itemPrice);
      this.itemCnt = keys.length;
      this.lastDate = moment(data.date).utcOffset('+09:00').format('YY-MM-DD HH:mm');
      keys.forEach((key, index)=>{
        this.itemPrices[index] = data.itemPrice[key]
        this.itemStock[index] = data.itemStock[key]
        this.itemName[index] = key
      });
    },
    getTotalPrice() {
      this.totalPrice = 0;

      this.itemPrices.forEach((price, index) => {
        if(this.order[index]){
          this.totalPrice += (this.order[index] * price);
        }
      });
    },
    setOrder(){
      let orderPrice = {};
      let orderCnt = {};
      this.itemName.forEach((name, index) => {
        this.order[index] ? orderCnt[name] = this.order[index] : orderCnt[name] = 0;
        orderPrice[name] = this.itemPrices[index];
      });
      this.$axios.post('/api/order/setOrder', {orderPrice, orderCnt, 'totalPrice' : this.totalPrice}).then(() => {
        this.$router.push('/userOrder');
      })
    },
  }
}
</script>

<style>
</style>