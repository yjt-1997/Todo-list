<template>
  <div id="app">
    <h2>Jquery To Do List</h2>
    <p>
      <em>Simple Todo List with adding and filter by diff status.</em>
    </p>
    <input type="text"><button>Add</button>
    <List></List>
    <a href="#">ALL</a>&nbsp;<a href="#">Active</a>&nbsp;<a href="#">Complete</a>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
