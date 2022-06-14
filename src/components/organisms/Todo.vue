<script setup>
import { computed } from 'vue'
import { useTodosStore } from '../../stores/todo'
import TodoCardMock from '../molecules/TodoCardMock.vue'
import TodoCard from '../molecules/TodoCard.vue'

const todos = useTodosStore()
const todoList = computed(() => todos.unfinishedTodos)
</script>
<template>
  <div class="mt-8 grid grid-cols-3 gap-4">
    <TodoCardMock v-if="todoList.length === 0" />
  </div>
    <TodoCard v-for="(item, index) in todoList" :items="item" :key="item" @done="todos.finishTodo(item)" />
</template>
