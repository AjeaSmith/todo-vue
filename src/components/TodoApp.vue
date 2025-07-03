<script setup>
import Search from './Search.vue'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()

console.log(store.todos)
</script>

<template>
  <section>
    <Search />
    <!-- TODO: add todo list component here -->
    <div v-for="todo in store.todos">
      {{ todo.text }}
      {{ todo.done }}
    </div>
  </section>
</template>
