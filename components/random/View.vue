<script lang="ts" setup>
import type {Character} from "~/data/characters";

defineProps<{
  character: Character,
  showAnswer: boolean,
}>()

const {width} = useWindowSize();
const fontSize = computed<{'font-size': string}>(() => {
  const size = width.value * 0.25;
  return {'font-size': `${size}px`}
})
</script>

<template>
  <div class="text-center select-none">
    <h1 :style="fontSize">
      {{ character.problem }}
    </h1>
    <p v-if="showAnswer">
      {{ character.answer }}
    </p>
  </div>
</template>

<style scoped></style>
