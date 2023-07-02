<template>
  <div class="mt-4">
    <div v-for="(a, i) in content" :key="i">
      <h5 @click="$router.push('/detail/' + i)">{{ a.title }}</h5>
      <p>{{ a.content }}</p>
      <p>{{ a.date }}</p>
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    content: Array,
  },
};
</script>

<style>
</style>