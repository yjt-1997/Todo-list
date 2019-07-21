<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key="index" v-bind:class="{checked:item.isCompleted}">
        <input name="todo-list" type="checkbox" v-model="item.isCompleted" />
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