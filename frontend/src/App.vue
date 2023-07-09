<template>
  <div>
    <userHeader v-if="memRole === 'USER'"/>
    <AdminHeader v-if="memRole ==='ADMIN'"/>
    <router-view :itemName="itemName" :itemPrices="itemPrices" :itemCnt="itemCnt"
                 :itemStock="itemStock" :memRole="memRole" @addItem="addItem()" @removeItem="removeItem()"
                 @price="setPrice" @stock="setStock" @editTitle="setTitle" @loginSucces="setMeminfo">
    </router-view>

    <button @click="$store.commit('setTest')">test</button>
    {{ $store.state.test }}

    {{memRole}}
  </div>
</template>

<script>
import UserHeader from "./components/user/UserHeader.vue";
import AdminHeader from "./components/admin/AdminHeader.vue";

export default {
  name: "App",
  data() {
    return {
      itemName: [],
      itemPrices: [],
      itemCnt: 0,
      itemStock: [],
      memRole: '',
    };
  },
  components: {
    UserHeader,
    AdminHeader,
  },
  created() {
    this.getItemInfo();
    //this.getItemStock();
  },
  methods: {
    addItem(){ this.itemCnt++; },
    removeItem(){ this.itemCnt--; },
    getItemInfo(){
      this.$axios.get('/api/admin/Item/getItem').then((result)=>{
        this.itemName = Object.keys(result.data.itemPrice);
        this.itemName.forEach((key, idx) => {
          this.itemPrices[idx] = result.data.itemPrice[key];
          this.itemStock[idx] = result.data.itemStock[key];
        });
        this.itemCnt = this.itemName.length;
      });
    },
    getItemStock(){
      this.$axios.get('/api/admin/getStock').then();
    },
    setPrice(price, index){
      this.itemPrices[index - 1] = price;
    },
    setStock(stock, index){
      this.itemStock[index - 1] = stock;
    },
    setTitle(title, index){
      this.itemName[index - 1] = title;
    },
    setMeminfo(aa){
      this.memRole = aa.data.memRole;
      console.log(this.memRole);
    }
  },
};
</script>



<style>
</style>
