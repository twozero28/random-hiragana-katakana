<script setup lang="ts">
import {hiraganas, katakanas} from "~/data/characters";
import type {Character} from "~/data/characters";
import {promiseTimeout} from "@vueuse/shared";

const data = [...hiraganas, ...katakanas];
const randomPick = (): Character => {
  return data[Math.floor(Math.random() * data.length)];
}
const character = ref<Character>(randomPick());
const {ready: showAnswer, start: next} = useTimeout(2500, {controls: true})
watchImmediate(showAnswer, async (value: boolean) => {
  if (value) {
    await promiseTimeout(1250);
    next();
    character.value = randomPick();
    return;
  }
})

const {width} = useWindowSize();
const fontSize = computed<{'font-size': string}>(() => {
  const size = width.value * 0.25;
  return {'font-size': `${size}px`}
})
</script>

<template>
  <div class="text-center">
    <h1 :style="fontSize">
      {{ character.problem }}
    </h1>
    <p v-if="showAnswer">
      {{ character.answer }}
    </p>
  </div>
</template>

<style scoped>

</style>