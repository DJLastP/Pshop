<template>
  <div class="container">
    <div>
      <h3 class="text-center my-2"></h3>
    </div>

    <div class="row my-2">
      <h3 class="text-center my-2">판매 가격 설정</h3>
      <div v-for="index in itemCnt" :key="index" class="row my-2">
        <div class="col">
          <span v-if="editTitle">{{itemName[index - 1]}}</span>
          <input v-if="!editTitle" @input="$emit('editTitle', $event.target.value, index)" type="text" :value="itemName[index - 1]" required>
        </div>
        <div class="col">
          <input class="my-1 form-control"
                 @input="$emit('price', $event.target.value, index)"
                 type="text" :value="itemPrices[index - 1]" required>
        </div>
        <div class="col">
          <input @input="$emit('stock', $event.target.value, index)"
                 class="my-1 form-control" type="text" :value="itemStock[index - 1]" required>
        </div>
      </div>
    </div>
    <button class="btn btn-danger rounded-5" @click="$emit('addItem')">+</button>
    <button class="btn btn-danger rounded-5" @click="$emit('removeItem')">-</button>
    <button class="btn btn-danger rounded-4" @click="test()">저장</button>
    <button v-if="editTitle" class="btn btn-danger" @click="editTitlebtn()">상품명 변경</button>
    <button v-if="!editTitle" class="btn btn-danger" @click="editTitlebtn()">상품명 변경완료</button>

  </div>
</template>

<script>

export default {
    name: 'SetItem',
    data(){
      return{
        editTitle: true,
      }
    },
    props:{
      itemName: Array,
      itemPrices: Array,
      itemCnt: Number,
      itemStock: Array,
    },
    methods: {
      test(){
        let sendData = {'items': this.itemName, 'itemPrices': this.itemPrices, 'itemCnt': this.itemCnt, 'itemStock': this.itemStock};
        this.$axios.post('/api/admin/item/setItem'
           , sendData)
          .then((result) => {
          console.log('재고등록성공', result);
        });
      },
      editTitlebtn(){
        this.editTitle === true ? this.editTitle = false : this.editTitle = true;
      },
    },
}
</script>

<style>

</style>