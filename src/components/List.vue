<template>
  <div>
    <ol>
      <li v-for="item in items" v-bind:key="item">
        <input name="todo-list" type="checkbox"/>
        <span>{{item.content}}</span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    items: Array
  }
};
</script>
<style></style>