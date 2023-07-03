<template>
  <div>
    <div class="row mx-2 px-1">
      {{ itemPrice['상품1'] }}
      {{ itemPrice['상품2'] }}
      {{ itemPrice['상품3'] }}
      {{ regDate }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  data() {
    return {
      itemPrice: {},
      regDate: ''
    };
  },
  created() {
    this.dataLoad();
  },
  methods: {
    dataLoad(){
      this.$axios.get("http://localhost:8081/api/getPrice")
      .then(result =>{
        this.itemPrice = result.data.itemPrices;
        this.regDate = result.data.date;

      console.log(this.$moment().format(result.data.date, 'YYYY-MM-DD').inValid());
    });
    }
  }
};
</script>

<style>
</style>