<template>
  <div class="">
    <div class="justify-content-center d-flex">
      <span ref="myInput" v-for="(item,index) of items" :key="index">{{item}}</span>
    </div>
    <div class="justify-content-center d-flex">
      <span v-for="(price,index) of itemPrices" :key="index">{{price}}</span>
    </div>
    <div class="justify-content-center d-flex">
      <span>상품재고현황</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "itemPrice",
  data() {
    return {
      items: [],
      itemPrices: [],
      itemCnt: 0,
    }},
  created() {
    this.getItemInfo();
  },
  methods: {
    getItemInfo(){
      this.$axios.get('/api/admin/setItem/getItemInfo').then((result)=>{
        this.items = Object.keys(result.data.items);
        this.items.forEach((key, idx) => {
          this.itemPrices[idx] = result.data.items[key];
        });
        this.itemCnt = result.data.itemCnt;
      });
    }
  }

}
</script>

<style>

</style>