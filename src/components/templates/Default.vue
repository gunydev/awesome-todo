<script setup>
import TodoFinished from '../organisms/TodoFinished.vue'
import TodoUnFinished from '../organisms/TodoUnFinished.vue'
import TodoInput from '../organisms/TodoInput.vue'
</script>

<template>
  <div class="container mx-auto">
    <TodoInput />
    <TodoUnFinished />
    <TodoFinished />
  </div>
</template>
