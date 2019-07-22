<template>
  <div id="app">
    <Header></Header>
    <input type="text" v-model="item" />
    <button @click="addItem">Add</button>
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
import List from "./components/List";
export default {
  name: "app",
  components: {
    List,
    Header
  },
  data() {
    return {
      items: [],
      itemsBackup: [],
      item: ""
    };
  },
  methods: {
    addItem() {
      let temp = { content: this.item, isCompleted: false };
      this.items.push(temp);
      this.itemsBackup.push(temp);
      this.item = "";
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
