<template>
  <div>
    <p>姓名：{{getLoginUser}}</p>
    <p>电话号码:{{getUserPhone}}</p>
  </div>
</template>

<script>
export default {
  name: "Main",
  computed: {
    getLoginUser: function() {
      return this.$store.state.name;
    },
    getUserPhone: function() {
      return this.$store.state.phone;
    }
  }
};
</script>