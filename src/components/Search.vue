<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <div class="circle" />
      <input
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
  store.addTodo(todoText.value)
  todoText.value = ''
}
</script>

<style scoped>
.form-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-inline: 1.25rem;
  padding-block: 14px;
  background: white;
  border-radius: 8px;

  input {
    border: none;
    width: 100%;
  }
  input:focus {
    outline: none;
    caret-color: var(--clr-blue);
  }
  ::placeholder {
    font-family: 'Josefin Sans', sans-serif;
  }
  .circle {
    width: 30px;
    height: 25px;
    border: 1px solid var(--color-border);
    border-radius: 100%;
  }
}
</style>
