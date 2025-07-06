import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface Todo {
  id: number
  text: string
  done: boolean
}
export const useTodoStore = defineStore(
  'todo',
  () => {
    // State
    const todos = ref<Todo[]>([])

    const filter = ref('all')

    // Computed
    const activeTodos = computed(() => {
      return todos.value.filter((todo) => !todo.done)
    })

    const filterTodos = computed(() => {
      if (filter.value === 'active') return todos.value.filter((todo) => !todo.done)
      if (filter.value === 'completed') return todos.value.filter((todo) => todo.done)

      return todos.value
    })

    // Actions
    function addTodo(text: string) {
      // unshift - shows newest todos on top
      todos.value.unshift({ id: todos.value.length + 1, text, done: false })
    }
    function deleteTodo(todoId: number) {
      todos.value = todos.value.filter((todo) => todo.id !== todoId)
    }
    function markAsComplete(todoId: number) {
      const todo = todos.value.find((todo) => todo.id === todoId)
      if (todo.done) {
        todo.done = false
      } else {
        todo.done = true
      }
    }
    function clearCompletedTodos() {
      todos.value = todos.value.filter((todo) => !todo.done)
    }
    return {
      todos,
      addTodo,
      deleteTodo,
      markAsComplete,
      filter,
      filterTodos,
      activeTodos,
      clearCompletedTodos,
    }
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ['todos'],
    },
  },
)
