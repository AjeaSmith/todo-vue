<template>
  <draggable v-model="store.todos" item-key="id" tag="ul">
    <template #item="{ element: todo }">
      <li v-if="store.shouldShow(todo)" class="todo-item" :class="{ completed: todo.done }">
        <label class="checkbox-wrapper">
          <input
            type="checkbox"
            class="checkbox-input-hidden"
            @click="store.markAsComplete(todo.id)"
          />
          <div class="checkbox-gradient" />
          <p class="todo">{{ todo.text }}</p>
        </label>
        <button class="todo-delete" type="button" @click="store.deleteTodo(todo.id)">
          <IconCross />
        </button>
      </li>
    </template>
  </draggable>

  <FilterList />
</template>

<script setup>
import draggable from 'vuedraggable'
import IconCross from './icons/IconCross.vue'
import { useTodoStore } from '@/stores/todo'
import FilterList from './FilterList.vue'
const store = useTodoStore()
</script>

<style>
ul {
  color: var(--color-text);
  background-color: var(--color-todo-background);
  list-style: none;
  padding: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition:
    color 0.5s,
    background-color 0.5s;
  box-shadow:
    0 10px 15px rgba(0, 0, 0, 0.1),
    0 4px 6px rgba(0, 0, 0, 0.05);
  margin-top: 1.5rem;

  .checkbox-wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .checkbox-input-hidden {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .checkbox-gradient {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1.2px solid var(--color-border);
    background-color: var(--color-todo-background);
    cursor: pointer;
    display: inline-block;
    transition:
      background 0.5s,
      border 0.5s;
  }

  .checkbox-input-hidden:checked + .checkbox-gradient,
  .todo-item.completed .checkbox-gradient {
    border: none;
    background:
      url('/images/icon-check.svg'),
      linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    background-repeat: no-repeat;
    background-position: center;
  }

  .checkbox-input-hidden:checked ~ .todo,
  .todo-item.completed .todo {
    text-decoration: line-through;
    color: var(--color-strikethrough);
  }

  .todo-item {
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding-block: 1rem;
    padding-inline: 1.3rem;
    border-bottom: 1.4px solid var(--color-border);
    transition: border 0.5s;
    position: relative;
  }

  .todo-item:hover .checkbox-gradient {
    border: 1.2px solid var(--clr-blue);
    border-radius: 50%;
    display: inline-block;
  }

  .todo-item:hover .checkbox-input-hidden:checked + .checkbox-gradient {
    border: none;
  }

  .todo-item:hover .todo-delete {
    display: block;
  }

  .todo {
    color: var(--color-text);
    transition: color 0.5s;
  }

  .todo-delete {
    display: none;
    padding-right: 1rem;
    cursor: pointer;
    color: var(--color-delete);
    width: 18px;
    height: 18px;
    border: none;
    background-color: transparent;
    align-self: center;
    justify-self: end;
  }
}
</style>
