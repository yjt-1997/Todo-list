<template>
  <div>
    <input type="text" v-model="item" />
    <button @click="addItem">Add</button>
  </div>
</template>
<script>
export default {
  name: "AddItem",
  data() {
    return {
      item: ""
    };
  },
  methods: {
    addItem() {
      this.$emit("toAddItem", { content: this.item, isCompleted: false });
      this.item = "";
    }
  }
};
</script>
<style></style>