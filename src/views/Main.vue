<template>
  <div style="text-align:center;">
    <input type="text" v-model="userName" placeholder="请输入姓名" />
    <br />
    <br />
    <a-button type="primary" @click="login">开始使用</a-button>
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