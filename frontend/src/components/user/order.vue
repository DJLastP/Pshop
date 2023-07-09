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
                <td>상품명</td>
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
                  <input @click="orderInit" @input="getTotalPrice()" v-model="order[index - 1]" type="number" class="form-control text-center">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10 d-flex justify-content-center">
          <span class="text-end">
            총 주문 가격 : {{totalPrice}}
          </span>
        </div>
      </div>
      <div class="row justify-content-center my-3">
        <div class="col-4 d-flex justify-content-center">
          <button class="btn btn-danger">주문</button>
        </div>
      </div>

      {{order}}
      {{itemCnt}}

    </div>
  </div>
</template>

<script>

export default {
  name: "order",
  data() {
    return {
      order: [],
      totalPrice: 0,
    }
  },

  components: {},
  props: {
    itemName: Array,
    itemPrices: Array,
    itemCnt: Number,
    itemStock: Array,
    memRole: String,
  },
  beforeUpdate() {
    this.orderInit()
  },
  methods: {
    getTotalPrice() {
      this.totalPrice = 0;

      this.itemPrices.forEach((price, index) => {
        this.totalPrice += (this.order[index] * price);
      });
    },
    orderInit() {
      if (this.order.length < this.itemCnt - 1) {
        for (let i = 0; i < this.itemCnt; i++) {
          this.order[i] = 0;
        }
      }
    },

  }
}
</script>

<style>
</style>