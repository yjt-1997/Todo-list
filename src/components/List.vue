<template>
  <div>
    <ol>
      <li class>
        <input name="todo-list" type="checkbox" class="todo-list" />
        <span>123</span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    items: Array
  }
};
</script>
<style></style>