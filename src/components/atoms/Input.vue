<script setup>
defineProps(['todoInput', 'error'])
defineEmits(['update:todoInput'])
</script>

<template>
  <input
    autofocus
    class="h-10 w-full rounded-full border-2 px-3 outline-none drop-shadow-md focus:border-gray-200 focus:ring-transparent"
    :class="{ 'border-red-500': error }"
    type="text"
    :value="todoInput"
    @input="$emit('update:todoInput', $event.target.value)"
  />
</template>
