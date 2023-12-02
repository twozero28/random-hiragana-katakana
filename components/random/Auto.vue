<script lang="ts" setup>
import type {Character} from "~/data/characters";

const props = defineProps<{
  character: Character,
  showAnswer: boolean,
}>();
const emit = defineEmits<{
  showAnswer: []
  closeAnswer: []
  changeCharacter: []
}>()
const time = useTime();
watchImmediate(() => props.showAnswer, async (v) => {
  if (v) {
    setTimeout(() => {
      emit('closeAnswer')
      emit('changeCharacter')
    }, 1250);
  }
  else {
    setTimeout(() => emit('showAnswer'), time.value);
  }
})
</script>

<template>
  <RandomView
      :character="character"
      :showAnswer="showAnswer"
  />
</template>

<style scoped></style>
