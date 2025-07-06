<template>
  <section class="filter-list">
    <span v-if="store.activeTodos.length > 1">{{ store.activeTodos.length }} items left</span>
    <span v-else>{{ store.activeTodos.length }} item left</span>
    <div class="filter-group">
      <button
        type="button"
        :class="{ active: store.filter === 'all' }"
        @click="store.filter = 'all'"
      >
        All
      </button>
      <button
        type="button"
        :class="{ active: store.filter === 'active' }"
        @click="store.filter = 'active'"
      >
        Active
      </button>
      <button
        type="button"
        :class="{ active: store.filter === 'completed' }"
        @click="store.filter = 'completed'"
      >
        Completed
      </button>
    </div>
    <button type="button" @click="store.clearCompletedTodos()">Clear Completed</button>
  </section>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
</script>

<style scoped>
.filter-list {
  box-shadow:
    0 10px 15px rgba(0, 0, 0, 0.1),
    0 4px 6px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 14px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  color: var(--color-filter-text);
  background-color: var(--color-todo-background);
  padding-block: 1rem;
  padding-inline: 1.4rem;
  transition:
    background-color 0.5s,
    color 0.5s;
}
.filter-list > button {
  font-weight: normal;
  justify-self: end;
}

.filter-group {
  display: flex;
  gap: 1rem;
}
button.active {
  color: var(--clr-blue);
}

button {
  font-weight: bold;
  color: var(--color-filter-text);
  cursor: pointer;
  border: none;
  background-color: transparent;
}
button:hover {
  color: var(--color-filter-hover);
}
</style>
