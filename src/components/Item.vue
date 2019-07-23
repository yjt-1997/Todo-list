<template>
  <div>
    <div v-if="!updateItemFlag">
      <input name="todo-list" type="checkbox" v-model="item.isCompleted" @change="updateCompleted" />
      <span v-bind:class="{checked:item.isCompleted}" @dblclick="resetFlag">{{item.content}}</span>
    </div>
    <div v-else>
      <input type="text" @change="updateItem()" v-model="content" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Item",
  props: {
    item: Object
  },
  data() {
    return {
      updateItemFlag: false,
      content: ""
    };
  },
  methods: {
    resetFlag() {
      this.updateItemFlag = !this.updateItemFlag;
    },
    updateCompleted() {
      this.update();
    },
    updateItem() {
      this.update();
      this.resetFlag();
    },
    update() {
      this.$store.dispatch("updateItem", {
        id: this.item.id,
        content: this.content == "" ? this.item.content : this.content,
        isCompleted: this.item.isCompleted
      });
    }
  }
};
</script>
<style></style>