<template>
  <div id="app">
    <Header></Header>
    <AddItem @toAddItem="addItem"></AddItem>
    <List :items="items"></List>
    <div>
      <ul id="filters">
        <li>
          <a href="#" @click="display('All')">ALL</a>
        </li>
        <li>
          <a href="#" @click="display('Actived')">Active</a>
        </li>
        <li>
          <a href="#" @click="display('Completed')">Complete</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import List from "./components/List";
export default {
  name: "app",
  components: {
    List,
    Header,
    AddItem
  },
  data() {
    return {
      items: [],
      itemsBackup: [],
    };
  },
  methods: {
    addItem(item) {
      this.items.push(item);
      this.itemsBackup.push(item);
    },
    display(flag) {
      if (flag == "All") {
        this.items = this.itemsBackup;
      } else if (flag == "Actived") {
        this.items = this.itemsBackup.filter(item => item.isCompleted == false);
      } else {
        this.items = this.itemsBackup.filter(item => item.isCompleted == true);
      }
    }
  }
};
</script>

<style>
@import url("./css/app.css");
</style>
