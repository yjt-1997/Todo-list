<template>
  <div>
    <input type="text" v-model="item" />
    <button id="addBtn" @click="addItem">Add</button>
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
      this.$store.dispatch("addItem", {
        content: this.item,
        isCompleted: false
      });
      this.item = "";
    }
  }
};
</script>
<style></style>