<script setup>
import { computed, ref } from 'vue'
import { useTodosStore } from './stores/todo'
import Input from './components/atoms/input.vue'
import Todo from './components/organisms/Todo.vue'

const todos = useTodosStore()

let error = ref(false)

const todoInput = ref('')

const createTodo = () => {
  todoInput.value != '' && todoInput.value.length > 0 ? todos.addTodo(todoInput.value) : (error.value = true)
}

const clearText = () => {
  todoInput.value = ''
}

</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-2 gap-4">
      <div class="text-2xl font-bold">What are you doing today?</div>
    </div>
    <div class="my-4 grid grid-cols-4 gap-4">
      <div class="col-span-3">
        <!-- input -->
        <Input :error="error" v-model:todoInput="todoInput" @blur="error = false" />
      </div>
      <div class="flex">
        <!-- button group -->
        <div class="mr-2 basis-1/4">
          <button
            @click="createTodo"
            class="h-10 w-full rounded-full bg-gray-500 px-4 py-1 text-xl font-bold text-white hover:drop-shadow-md"
          >
            Add
          </button>
        </div>
        <div v-if="todoInput.length" class="basis-1/4">
          <button
            class="h-10 w-full rounded-full bg-black px-4 py-1 text-xl font-bold text-white hover:drop-shadow-md"
            @click="clearText"
          >
            Clear
          </button>
        </div>
      </div>
    </div>

   
    <Todo/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
