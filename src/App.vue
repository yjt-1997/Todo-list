<template>
  <div id="app">
    <Header></Header>
    <AddItem></AddItem>
    <List></List>
    <Filters></Filters>
  </div>
</template>

<script>
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import List from "./components/List";
import Filters from "./components/Filters";
export default {
  name: "app",
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
@import url("./css/app.css");
</style>
