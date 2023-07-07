<template>
     <div class="row my-2 d-flex justify-content-center">
        <div class="col-6 d-grid">
            <input class="form-control" type="text" :value="value" @input="$emit('input11', $event)">
        </div>
    </div>
</template>

<script>
export default {
    name: 'itemName',
    data() {return {
    }},
    watch: {
    },
    props: {
    value: {
      type: String,
      required: true
    }
  },
}
</script>

<style>

</style>