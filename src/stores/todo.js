import axios from 'axios'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    /** @type {{ task: string, id: number, isFinished: boolean }[]} */
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
    async getTodos() {
      try {
        const response = await axios.get('/api/todos')
        if (response.status === 200) {
          this.todos = response.data
          console.log(this.todos)
        }
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async addTodo(task) {
      try {
        const response = await axios.put('/api/todos', { task, isFinished: false })
        this.todos.push({ task, id: this.nextId++, isFinished: false })
        if (response === 200) {
          this.getTodos()
          return true
        }
      } catch (error) {
        console.log('error: ', error)
        return false
      }

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
    },
    // delete todos
    // update todo status
  },
})