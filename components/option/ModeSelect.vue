<script lang="ts" setup>
import {Mode} from "~/types/enums";
defineProps<{
  selectPadding?: string
}>()

const mode = useMode();
const modes = enumToArray(Mode);
</script>

<template>
  <BaseSelect v-model="mode" :padding="selectPadding">
    <template  v-for="m in modes">
      <option :value="Mode[m.value]" :selected="m.key === mode">{{ m.value }}</option>
    </template>
  </BaseSelect>
</template>

<style scoped></style>
