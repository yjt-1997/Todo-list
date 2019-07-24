<template>
  <div>
    <div style="margin-top:300px;margin-left:300px;">
      <a-avatar style="margin-left:45%;margin-bottom:50px;" size="large" icon="user" />
      <a-input placeholder="请输入姓名" v-model="userName"/>
       <!-- <a-input-search placeholder="请输入姓名" @search="login" enterButton="开始使用" size="large" /> -->
      <a-button type="primary" @click="login">开始使用</a-button>
    </div>
  </div>
</template>
<script>
import mutationsType from "../store/user/mutationsType";
export default {
  name: "Main",
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    login() {
      this.$store.commit(mutationsType.ADD_USER_NAME, this.userName);
      this.$router.push({ path: "/home" });
    }
  }
};
</script>
<style></style>