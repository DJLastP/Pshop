<template>
  <div class="container px-0">
    <UserHeader v-if="$store.state.memRole === 0" />
    <AdminHeader v-if="$store.state.memRole === 1" />
    <router-view>
    </router-view>
    <div class="menu-bar">
      <MenuBar></MenuBar>
    </div>
  </div>
</template>

<script>
import UserHeader from "./components/user/UserHeader.vue";
import AdminHeader from "./components/admin/AdminHeader.vue";
import MenuBar from "./components//Menu.vue";

export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    UserHeader,
    AdminHeader,
    MenuBar,
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
  min-height: 550px;
  margin-bottom: 100px;
}
.menu-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /* 기타 스타일 작성 */
}

</style>
