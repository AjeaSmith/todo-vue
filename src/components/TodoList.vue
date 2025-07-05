<template>
  <ul class="todo-list">
    <li class="todo-item" v-for="(todo, index) in store.todos" :key="index">
      <label>
        <input type="checkbox" class="custom-checkbox" />
        <p class="todo">{{ todo.text }}</p>
      </label>
    </li>
  </ul>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo'
const store = useTodoStore()
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
label {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.todo-list {
  box-shadow:
    0 10px 15px rgba(0, 0, 0, 0.1),
    0 4px 6px rgba(0, 0, 0, 0.05);
  margin-top: 1.5rem;
  color: var(--color-text);
  background-color: var(--color-todo-background);
  border-radius: 8px;
  transition:
    color 0.5s,
    background-color 0.5s;

  .todo-item {
    padding-block: 1rem;
    padding-inline: 1.4rem;
    border-bottom: 1.4px solid var(--color-border);
    transition: border 0.5s;
  }
  .todo-item:last-child {
    border-bottom: 0;
  }
}
.custom-checkbox {
  width: 25px;
  height: 25px;
  appearance: none;
  border: 1.3px solid var(--color-border);
  border-radius: 50%;
  background-color: var(--color-todo-background);
  cursor: pointer;
  position: relative;
  transition:
    border 0.5s,
    background-color 0.5s;
}
.custom-checkbox:checked {
  background:
    url('/images/icon-check.svg'),
    linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  border: none;
  background-repeat: no-repeat;
  background-position: center;
}
.custom-checkbox:checked + .todo {
  text-decoration: line-through;
  color: var(--color-strikethrough);
  transition: color 0.5s;
}
</style>
