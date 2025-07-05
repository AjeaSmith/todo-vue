import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
  id: number
  text: string
  done: boolean
}
export const useTodoStore = defineStore('todo', () => {
  // State
  const todos = ref<Todo[]>([
    { id: 1, text: 'wash dishes', done: false },
    { id: 2, text: 'clean room', done: false },
  ])

  // Actions
  function addTodo(text: string) {
    todos.value.push({ id: todos.value.length + 1, text, done: false })
  }
  function deleteTodo(todoId: number) {
    todos.value = todos.value.filter((todo) => todo.id !== todoId)
  }
  return { todos, addTodo, deleteTodo }
})
