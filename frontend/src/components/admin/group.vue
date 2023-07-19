<template>
  <div class="">
    <table class="table text-center ">
      <tbody class="">
        <tr class="align-items-center">
          <td class=""><span>A그룹 : </span></td>
          <td>
            <input type="text" class="form-control" v-model="groupInfo['A']">
          </td>
        </tr>
        <tr>
          <td><span>B그룹 : </span></td>
          <td>
            <input type="text" class="form-control" v-model="groupInfo['B']">
          </td>
        </tr>
        <tr>
          <td><span>C그룹 : </span></td>
          <td>
            <input type="text" class="form-control" v-model="groupInfo['C']">
          </td>
        </tr>
        <tr>
          <td><span>D그룹 : </span></td>
          <td>
            <input type="text" class="form-control" v-model="groupInfo['D']">
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="setGroup()">저장</button>
    <div class="row mt-5">
      <span class="text-end">마지막 업데이트 : {{ lastDate }}</span>
    </div>

  </div>
</template>
<script>
import moment from "moment/moment";

export default {
  name: 'group',
  data() {
    return {
      groupInfo: {},
      lastDate: null,
    };
  },
  created() {
    this.getGroupInfo();
  },
  methods: {
    async getGroupInfo(){
      await this.$axios.get('/api/item/getGroup').then((result) => {
        this.groupInfo = result.data.groupInfo;
        this.lastDate = moment(result.data.date).utcOffset('+09:00').format('YY-MM-DD HH:mm');
      });
    },
    async setGroup(){
      await this.$axios.post('/api/item/setGroup', this.groupInfo).then(()=>{
        alert('저장완료');
        this.getGroupInfo();
      })
      .catch(() => {
        alert('업데이트 실패');
      });

    },
  },


}
</script>
<style>

</style>