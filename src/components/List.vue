<template>
  <div>
    <ol>
      <li>
        <input name="todo-list" type="checkbox" class="todo-list" />
        <span>
          <s>123</s>
        </span>
      </li>
      <li>
        <input name="todo-list" type="checkbox" class="todo-list" />
        <span>456</span>
      </li>
      <li>
        <input name="todo-list" type="checkbox" class="todo-list" />
        <span>789</span>
      </li>
      <li>
        <input name="todo-list" type="checkbox" class="todo-list" />
        <span>1011</span>
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