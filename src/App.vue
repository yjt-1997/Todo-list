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
          <a href="#" @click="displayAll">ALL</a>
        </li>
        <li>
          <a href="#" @click="displayActived">Active</a>
        </li>
        <li>
          <a href="#" @click="displayCompleted">Complete</a>
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
    displayAll() {
      this.items = this.itemsBackup;
    },
    displayActived() {
      this.items = this.itemsBackup.filter(item => item.isCompleted == false);
    },
    displayCompleted() {
      this.items = this.itemsBackup.filter(item => item.isCompleted == true);
    }
  }
};
</script>

<style>
@import url("./css/app.css");
</style>
