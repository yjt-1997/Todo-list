<template>
  <div id="app">
    <Header></Header>
    <AddItem></AddItem>
    <List :items="items"></List>
    <Filters @clickFilter="display"></Filters>
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
  data() {
    return {
      items: []
    };
  },
  methods: {
    display(filterItems) {
      this.items = filterItems;
    }
  }
};
</script>

<style>
@import url("./css/app.css");
</style>
