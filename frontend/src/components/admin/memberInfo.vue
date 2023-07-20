<template>
  <div>
    <h3 class="text-center mt-3">회원목록</h3>
    <table class="table text-center my-3">
      <thead>
        <tr>
          <td>No</td>
          <td>이름</td>
          <td>연락처</td>
          <td>승인</td>
          <td>그룹</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mem, index) in memInfo" :key="index">
          <td class="justify-content-center align-items-center">{{ index + 1}}</td>
          <td class="justify-content-center align-items-center">{{ mem.memId }}</td>
          <td class="justify-content-center align-items-center">{{ mem.memTell }}</td>
          <td class="justify-content-center align-items-center">
              <div class="form-check form-switch justify-content-center align-items-center d-flex">
                <input class="form-check-input danger" type="checkbox" role="switch" id="" :checked="mem.isAuth === 'Y'" @change="toggleCheckbox(mem._id, $event.target.checked)">
              </div>
          </td>
          <td class="justify-content-center align-items-center px-0">
            <select style="text-align: center; width: 50px" class="form-control py-0" :value="mem.memLevel" @change="updateGroup(mem._id, $event.target.value)">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "memberInfo",
  data() {
    return {
      memInfo: [],
    }
  },
  created() {
    this.getMemList();
  },
  methods: {
    async getMemList(){
      await this.$axios.get('/api/member/memInfo').then((result)=>{
        this.memInfo = result.data;
      });
    },
    async toggleCheckbox(_id, checked) {
      let data = {_id, checked,}
      await this.$axios.post('/api/member/updateIsAuth', data).then(() => {
        alert('업데이트 성공');
      });
    },
    async updateGroup(_id, value){
      const data = {_id, value,}
      await this.$axios.post('/api/member/updateGroup', data).then(() => {
        alert('그룹변경 성공');
      });
    },
  },
};
</script>

<style>

</style>
