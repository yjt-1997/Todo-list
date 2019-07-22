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
export default {
  name: "Filters",
  props: {
    items: Array
  },
  methods: {
    display(flag) {
      if (flag == "All") {
        this.$emit("clickFilter", this.items);
      } else if (flag == "Actived") {
        this.$emit(
          "clickFilter",
          this.items.filter(item => item.isCompleted == false)
        );
      } else {
        this.$emit(
          "clickFilter",
          this.items.filter(item => item.isCompleted == true)
        );
      }
    }
  }
};
</script>
<style></style>