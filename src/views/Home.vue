<template>
  <div>
    <div>
      <a-layout>
        <a-layout-sider
          :trigger="null"
          collapsible
          style="background: #fff; padding: 0;width:200px;"
        >
          <a-menu theme="light" mode="inline" :defaultSelectedKeys="['1']">
            <a-menu-item key="2">
              <a-icon type="rollback" />
              <span>返回</span>
              <router-link to="/"></router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="check-square" />
              <span>TodoList列表</span>
              <router-link to="/TodoList"></router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <a-icon type="user" />
              <span>我的</span>
              <router-link to="/Mine"></router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <a-layout-header style="background: #fff; padding: 0">
            <a-icon
              class="trigger"
            />
            <div style="float:right;padding-right: 10px">Welcome:[<router-link to="/Mine">{{getLoginUser}}</router-link>]</div>
          </a-layout-header>
          <a-layout-content>
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
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