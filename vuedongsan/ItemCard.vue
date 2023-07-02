<template>
    <div>
        <img class="room-img" :src="onerooms.image">
        <h4 @click="openModal">{{ onerooms.title }}</h4>
        <p>{{ onerooms.price }}원</p>
    </div>
</template>

<script>
export default {
    name: 'ItemCard',
    props: {
        onerooms : Object,
    },
    methods : {
        // 커스텀이벤트 발생 (이벤트명, 데이터)
        openModal(){

            this.$emit('openModal', this.onerooms.id)
        },
    }

}
</script>

<style>

</style>