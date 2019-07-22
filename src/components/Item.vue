<template>
  <div>
    <input name="todo-list" type="checkbox" v-model="item.isCompleted" />
    <span>{{item.content}}</span>
  </div>
</template>
<script>
export default {
  name: "Item",
  props: {
    item:Object
  }
};
</script>
<style></style>