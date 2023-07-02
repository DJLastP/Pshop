<template>
    <div class="black-bg">
        <div class="white-bg">
            <img :src="onerooms[click].image" style="width: 100%;">
            <h4>{{ onerooms[click].title }}</h4>
            <p>{{ onerooms[click].content }}</p>
            <input v-model="month" type="number" placeholder="1">
            <p>{{ month }} 개월 선택함 : {{ onerooms[click].price * month }}</p>
            <button @click="$emit('closeModal')">모달 닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data(){
        return{
            month : 1,
        }
    },
    watch: {
        month(a){
            if(a >= 13){
                alert('13이상 ㄴㄴ');
                this.month = 1;
            }
            if(isNaN(a))
                alert('글자 ㄴㄴ');
            }
    },
    props: {
        onerooms: Object,
        isOpen: Boolean,
        click: Number,
    },

}
</script>

<style>

</style>