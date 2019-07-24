<template>
  <div>
    <div>
      <ol>
        <li>
          <router-link to="/">返回</router-link>
        </li>
        <li>
          <router-link to="/TodoList">TodoList列表</router-link>
        </li>
        <li>
          <router-link to="/Mine">我的</router-link>
        </li>
      </ol>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  computed: {
    getLoginUser: function() {
      return this.$store.state.user.name;
    }
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm("确认返回吗？");
    if (answer) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style>
</style>