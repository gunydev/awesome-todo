<script setup>
import { RadioGroup, RadioGroupLabel, RadioGroupDescription, RadioGroupOption } from '@headlessui/vue'
import { ref } from 'vue'

const emit = defineEmits(['done'])
const props = defineProps({
  items: {
    type: Object,
    default: {},
  },
  disableSelect: {
    type: Boolean,
    default: false
  }
})

const selected = ref(props.items[0])
</script>

<template>
  <div class="w-full py-6">
    <div class="ml-10 w-full max-w-xl">
      <RadioGroup v-model="selected">
        <div class="space-y-2">
          <RadioGroupOption
            as="template"
            v-for="item in items"
            :key="item.text"
            :value="item"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : '',
                checked && !disableSelect ? 'bg-sky-900 bg-opacity-75 text-white ' : 'bg-white ',
              ]"
              class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel as="p" :class="checked && !disableSelect ? 'text-white' : 'text-gray-900'" class="font-medium">
                      {{ item.text }}
                    </RadioGroupLabel>
                  </div>
                </div>
                <div v-show="checked" class="shrink-0 text-white" @click="emit('done', item.id)">
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>
