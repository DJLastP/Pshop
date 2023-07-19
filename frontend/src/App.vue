<template>
  <div class="container px-0">
    <userHeader v-if="$store.state.memRole === 0"/>
    <AdminHeader v-if="$store.state.memRole === 1"/>
    <router-view>
    </router-view>

  </div>
</template>

<script>
import UserHeader from "./components/user/UserHeader.vue";
import AdminHeader from "./components/admin/AdminHeader.vue";

export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    UserHeader,
    AdminHeader,
  },
  created() {
  },
  methods: {
  },
};
</script>



<style>
.container {
  width: 100%; /* 가로 폭을 화면 크기에 맞게 설정합니다. */
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
  overflow-x: hidden;
}
</style>
