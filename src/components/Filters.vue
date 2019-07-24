<template>
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
</template>
<script>
import mutationsType from "../store/items/mutationsType";
export default {
  name: "Filters",
  methods: {
    display(status) {
      console.log(mutationsType.UPDATE_STATUS);
      console.log(status);
      this.$store.commit(mutationsType.UPDATE_STATUS, status);
      console.log(this.$store.state.items.status);
    }
  }
};
</script>
<style></style>