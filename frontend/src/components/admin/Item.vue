<template>
  <div class="container mt-3 text-center">
    <h3>상품 가격 설정</h3>
      <div class="row d-flex justify-content-center my-2">
        <div class="col-10 text-center mx-2">
          <label for="" class="form-label">상품1</label>
          <input v-model="itemPrice1" type="text" class="form-control" id="" placeholder="">
        </div>
      </div>
      <div class="row d-flex justify-content-center my-2">
        <div class="col-10 text-center mx-2">
          <label for="" class="form-label">상품2</label>
          <input v-model="itemPrice2" type="text" class="form-control" id="" placeholder="">
        </div>
      </div>
      <div class="row d-flex justify-content-center my-2">
        <div class="col-10 text-center mx-2">
          <label for="" class="form-label">상품3</label>
          <input v-model="itemPrice3" type="text" class="form-control" id="" placeholder="">
        </div>
      </div>
      <div class="row d-flex justify-content-center my-2">
        <div class="col-10 text-center mx-2">
          <button type="button" @click="submit();" class="btn btn-danger">등록</button>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "Item",
  methods: {
    submit(){
      let data = { '상품1' : this.itemPrice1 , '상품2' : this.itemPrice2, '상품3' : this.itemPrice3};
      this.$axios.post("http://localhost:8081/api/setPrice", data).then((res) => {
        console.log(res);
        if(res.status == 200){
          alert("가격설정 완료");
        }
      });
    }
  }

};
</script>

<style>
</style>