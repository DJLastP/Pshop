<template>
  <div>
    <h3>상세페이지</h3>
    <h4>{{ content[$route.params.id].title }}</h4>
    <h4>{{ content[$route.params.id].content }}</h4>
    <h5></h5>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    content: Array,
  },
};
</script>

<style>
</style>