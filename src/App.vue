<template>
  <div id="app">
    <h2>Jquery To Do List</h2>
    <p>
      <em>Simple Todo List with adding and filter by diff status.</em>
    </p>
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
import List from "./components/List";
export default {
  name: "app",
  components: {
    List
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
