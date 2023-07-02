<template>
  <div>
    <!-- 모달 -->

    <!-- 상단바 -->
    <div class="menu">
      <a v-for="a in heeder" :key="a">{{ a }}</a>
    </div>

    <transition name="fade">
      <Modal
        @closeModal="isOpen = false"
        :onerooms="onerooms"
        :click="click"
        :isOpen="isOpen"
        v-if="isOpen"
      />
    </transition>

    <Discount v-if="showDiscout == true"></Discount>

    <button @click="priceSort">가격순정렬</button>
    <button @click="sortBack">되돌리기</button>

    <!-- 내용  -->
    <Card
      @openModal="
        isOpen = true;
        click = $event;
      "
      :onerooms="onerooms[i]"
      v-for="(a, i) in onerooms"
      :key="a"
    />
  </div>
</template>



<script>
import data from "./assets/oneroom.js";
import Discount from "../vuedongsan/Discount.vue";
import Modal from "../vuedongsan/DetailModal.vue";
import Card from "../vuedongsan/ItemCard.vue";

export default {
  name: "App",
  data() {
    return {
      showDiscout: true,
      originOnerooms: [...data],
      Object: { name: "kim", age: 20 },
      click: 0,
      heeder: ["home", "Shop", "About"],
      onerooms: data,
      isOpen: false,
      cnt: [0, 0, 0],
    };
  },

  methods: {
    increase(i) {
      this.cnt[i]++;
    },
    priceSort() {
      this.onerooms.sort((a, b) => {
        return a.price - b.price;
      });
    },
    sortBack() {
      this.onerooms = [...this.originOnerooms];
    },
  },

  mounted() {
    setTimeout(() => {
      this.showDiscout = false;
    }, 2000);
  },
  components: {
    Discount,
    Modal,
    Card,
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
  cursor: pointer;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}

/* 모달 */
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
