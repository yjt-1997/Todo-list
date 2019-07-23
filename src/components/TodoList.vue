<template>
  <div>
    <Header></Header>
    <AddItem></AddItem>
    <List></List>
    <Filters></Filters>
  </div>
</template>

<script>
import Header from "./Header";
import AddItem from "./AddItem";
import List from "./List";
import Filters from "./Filters";
export default {
  name: "TodoList",
  components: {
    List,
    Header,
    AddItem,
    Filters
  },
  mounted() {
    this.$store.dispatch("getList");
  }
};
</script>

<style>
@import url("../css/app.css");
</style>
