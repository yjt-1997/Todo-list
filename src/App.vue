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
          <a href="#">ALL</a>
        </li>
        <li>
          <a href="#">Active</a>
        </li>
        <li>
          <a href="#">Complete</a>
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
      item: ""
    };
  },
  methods: {
    addItem() {
      this.items.push({ content: this.item });
      this.item = "";
    }
  }
};
</script>

<style>
@import url("./css/app.css");
</style>
