<script setup>
import { useTodosStore } from '../stores/todo';
import Default from '../components/templates/Default.vue'
import { onMounted } from 'vue';

const todos = useTodosStore()
onMounted(() => {
    todos.getTodos()
})
</script>

<template>
  <Default />
</template>
