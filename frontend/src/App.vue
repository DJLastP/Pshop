<template>
  <div>
    <userHeader />
    <router-view></router-view>
    <input type="button" value="abc" @click="more()" class="btn btn-primary" />
  </div>
</template>



<script>
import UserHeader from "./components/user/UserHeader.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    UserHeader,
  },
  methods: {
    more() {
      this.$axios.get("http://localhost:8081/api/user").then((result) => {
        console.log(result);
      });
    },
  },
};
</script>



<style>
</style>
