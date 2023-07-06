<template>
  <div>
    <div>
      <h3 class="text-center">주문하기</h3>
      <ItemPrice ref="test"></ItemPrice>
      <button @click="getChildData()">test</button>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import ItemPrice from "@/components/user/ItemPrice.vue";
export default {
  name: "order",
  components: {
    ItemPrice
  },
  methods: {
    getChildData() {
      const childData = this.$refs.test.$refs.myInput;
      console.log(childData[0].textContent);
    }
  }
}
</script>

<style>
</style>