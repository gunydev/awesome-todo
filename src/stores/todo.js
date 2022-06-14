import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos() {
      return this.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos() {
      return this.todos.filter((todo) => !todo.isFinished)
    },
    filteredTodos() {
      if (this.filter === 'finished')
        return this.finishedTodos
      else if (this.filter === 'unfinished')
        return this.unfinishedTodos
      else
        return this.todos
    },
  },
  actions: {
    addTodo(text) {
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
    finishTodo(id) {
      this.todos.filter((e) => {
        if (e.id == id) e.isFinished = true
      })
    },
    clearHistory() {
      this.todos.forEach((ele, index) => {
        if (ele.isFinished === true) delete this.todos[index]
      })
    }
  },
})