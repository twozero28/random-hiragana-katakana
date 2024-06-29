<script lang="ts" setup>

defineProps<{
  selectPadding?: string
}>()
const secToMs = (second: number): number => (second * 1000)
const toHalf = (num: number): number => num / 2
const time = useTime();

</script>

<template>
  <BaseSelect v-model="time" :padding="selectPadding">
    <template v-for="t in 10" :key="t">
      <option :value="secToMs(toHalf(t))" :selected="toHalf(t) === time" >{{ toHalf(t) }}</option>
    </template>
  </BaseSelect>
</template>

<style scoped></style>
