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
      this.$store.commit(mutationsType.UPDATE_STATUS, status);
    }
  }
};
</script>
<style></style>