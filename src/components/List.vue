<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key="index" v-bind:class="{checked:item.isCompleted}">
        <input name="todo-list" type="checkbox" v-model="item.isCompleted" />
        <span @dclick="updateItem(item,index)">{{item.content}}</span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    items: Array
  },
  methods: {
    updateItem(item, index) {
      let str = prompt("请输入修改后的信息：");
      if (str) {
        item.content = str;
        this.$emit("updateItem", item, index);
      }
    }
  }
};
</script>
<style></style>