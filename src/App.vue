<template>
  <div id="app">
    <h2>Jquery To Do List</h2>
    <p>
      <em>Simple Todo List with adding and filter by diff status.</em>
    </p>
    <input type="text" />
    <button>Add</button>
    <List></List>
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
  }
};
</script>

<style>
@import url("./css/app.css");
</style>
