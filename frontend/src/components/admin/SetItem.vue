<template>
  <div class="container">
    <div>
      <h3 class="text-center my-2"></h3>
    </div>

    <div class="row my-2 d-flex justify-content-center">
      <h3 class="text-center my-2">판매 가격 설정</h3>
      <div class="row my-2">
        <div class="col d-flex justify-content-center align-items-center">
          <span>상품명</span>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <span>가격</span>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <span>입고수량</span>
        </div>
      </div>
      <div v-for="index in itemCnt" :key="index" class="row my-2">
        <div class="col d-flex justify-content-center align-items-center">
          <span v-if="editTitle">{{itemName[index - 1]}}</span>
          <input v-if="!editTitle" class="form-control" @input="setTitle($event.target.value, index)" type="text" :value="itemName[index - 1]" required>
        </div>
        <div class="col">
          <input class="my-1 form-control"
                 @input="setPrice($event.target.value, index)"
                 type="text" :value="itemPrices[index - 1]" required>
        </div>
        <div class="col">
          <input @input="setStock($event.target.value, index)"
                 class="my-1 form-control" type="text" :value="itemStock[index - 1]" required>
        </div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col col-4 d-flex justify-content-center align-items-center">
        <button v-if="editTitle" class="btn btn-danger" @click="editTitlebtn()">이름변경</button>
        <button v-if="!editTitle" class="btn btn-danger" @click="editTitlebtn()">변경완료</button>
      </div>
      <div class="col col-4 d-flex justify-content-center align-items-center">
        <button class="btn btn-danger rounded-4" @click="setItem()">저장</button>
      </div>
      <div class="col col-2 d-flex justify-content-center align-items-center">
        <button class="btn btn-danger rounded-5" @click="addItem">+</button>
      </div>
      <div class="col col-2 d-flex justify-content-center align-items-center">
        <button class="btn btn-danger rounded-5" @click="removeItem"> - </button>
      </div>
    </div>
    <div class="row mt-5">
      <span class="text-end">마지막 업데이트 : {{ lastDate }}</span>
    </div>

  </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'SetItem',
    data(){
      return{
        editTitle: true,
        itemCnt: 0,
        itemPrices: [],
        itemStock: [],
        itemName: [],
        lastDate: null,
      }
    },
    created() {
      this.getItemInfo()
    },
    methods: {
      async getItemInfo(){
        await this.$axios.get('/api/item/getItem').then((result)=>{
          this.setItemInfo(result.data)
        })
      },
      setItemInfo(info){
        const keys = Object.keys(info.itemPrice);
        this.itemCnt = keys.length;
        this.lastDate = moment(info.date).utcOffset('+09:00').format('YY-MM-DD HH:mm');
        keys.forEach((key, index)=>{
          this.itemPrices[index] = info.itemPrice[key]
          this.itemStock[index] = info.itemStock[key]
          this.itemName[index] = key
        });
      },
      async setItem(){
        let sendData = {'items': this.itemName, 'itemPrices': this.itemPrices, 'itemCnt': this.itemCnt, 'itemStock': this.itemStock};
        await this.$axios.post('/api/item/setItem'
            , sendData)
            .then(() => {
              this.getItemInfo()
              alert('업데이트 성공');
            });
      },
      addItem(){ this.itemCnt++; },
      removeItem(){
        this.itemCnt--;
        this.itemStock.pop();
        this.itemPrices.pop();
        this.itemName.pop();
        },
      editTitlebtn(){
        this.editTitle === true ? this.editTitle = false : this.editTitle = true;
      },
      setPrice(price, index){
        this.itemPrices[index - 1] = price;
      },
      setStock(stock, index){
        this.itemStock[index - 1] = stock;
      },
      setTitle(title, index){
        this.itemName[index - 1] = title;
      },
    },
}
</script>

<style>

</style>