<script lang="ts" setup>
interface Props {
  padding?: string,
  modelValue?: any,
}
const props = withDefaults(defineProps<Props>(), {
  padding: 'p-2',
});
const emit = defineEmits(['update:modelValue'])
const data = useVModel(props, 'modelValue', emit);
</script>

<template>
  <select
      v-model="data"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :class="[padding]"
  >
    <slot/>
  </select>
</template>

<style scoped></style>
