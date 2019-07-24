<template>
  <div>
    <div>
      姓名：{{getLoginUser}}
      <ol>
        <li>
          <a href="/" onclick="return confirm('确认返回吗')">返回</a>
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
      return this.$store.state.name;
    }
  }
};
</script>

<style>
</style>