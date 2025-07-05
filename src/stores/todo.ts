import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
  text: string
  done: boolean
}
export const useTodoStore = defineStore('todo', () => {
  // State
  const todos = ref<Todo[]>([
    { text: 'wash dishes', done: false },
    { text: 'clean room', done: false },
  ])

  // Actions
  function addTodo(text: string) {
    todos.value.push({ text, done: false })
  }

  return { todos, addTodo }
})
