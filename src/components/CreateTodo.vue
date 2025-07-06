<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <div class="circle" />
      <input
        autocomplete="off"
        v-model="todoText"
        type="text"
        name="todo"
        id="todo"
        placeholder="Create a new todo..."
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

const todoText = ref('')
const store = useTodoStore()

function handleSubmit() {
  if (!todoText.value) return
  store.addTodo(todoText.value)
  todoText.value = ''
}
</script>

<style scoped>
.form-item {
  box-shadow:
    0 10px 15px rgba(0, 0, 0, 0.1),
    0 4px 6px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 0.1fr 1.2fr;
  padding-inline: 1.4rem;
  padding-block: 14px;
  background-color: var(--color-todo-background);
  border-radius: 8px;
  transition: background-color 0.5s;

  input {
    border: none;
    width: 100%;
    color: var(--color-text);
    background-color: var(--color-todo-background);
    transition:
      color 0.5s,
      background-color 0.5s;
  }
  input:focus {
    outline: none;
    caret-color: var(--clr-blue);
  }
  ::placeholder {
    font-family: 'Josefin Sans', sans-serif;
  }
  .circle {
    width: 25px;
    height: 25px;
    border: 1.3px solid var(--color-border);
    border-radius: 100%;
    transition: border 0.5s;
  }
}
</style>
