<script setup>
import { computed } from 'vue'
import { useTodosStore } from '../../stores/todo'
import TodoCard from '../molecules/TodoCard.vue'

const todos = useTodosStore()
const unfinishedTodoList = computed(() => todos.unfinishedTodos)
</script>

<template>
  <div class="text-left text-2xl font-bold">Todo</div>
  <div class="my-10 flex min-h-[200px] rounded-xl border-2 bg-gray-200 drop-shadow-xl">
    <TodoCard :items="unfinishedTodoList" @done="todos.finishTodo" />
  </div>
</template>
