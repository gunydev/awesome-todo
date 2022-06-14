<script setup>
import { computed } from 'vue'
import { useTodosStore } from '../../stores/todo'
import TodoCard from '../molecules/TodoCard.vue'

const todos = useTodosStore()
const finishedTodoList = computed(() => todos.finishedTodos)
</script>

<template>
  <div class="text-left text-2xl font-bold">History <span @click="todos.clearHistory" class="text-xs text-gray-500 underline ml-2 decoration-dotted">Clear History</span></div>
  <div class="my-10 flex min-h-[200px] rounded-xl border-2 bg-gray-200 drop-shadow-xl">
    <TodoCard :items="finishedTodoList" :disable-select="true" />
  </div>
</template>
