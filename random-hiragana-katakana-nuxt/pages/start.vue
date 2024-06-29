<script setup lang="ts">
import type {Character} from "~/data/characters";
import {hiraganas, katakanas} from "~/data/characters";
import {CharacterSelection, Mode} from "~/types/enums";

const mode = useMode();

const characterSelection = useCharacterSelection();
const data = computed(() => {
  if (characterSelection.value === CharacterSelection.Hiragana) {
    return [...hiraganas];
  } else if (characterSelection.value === CharacterSelection.Katakana) {
    return [...katakanas];
  } else {
    return [...hiraganas, ...katakanas]
  }
});
const randomPick = (): Character => {
  return data.value[Math.floor(Math.random() * data.value.length)];
}
const character = ref<Character>(randomPick());
const showAnswer = ref(false);
const onShowAnswer = () => {
  showAnswer.value = true;
}
const onCloseAnswer = () => {
  showAnswer.value = false;
}
const onChangeCharacter = () => {
  character.value = randomPick();
}
</script>

<template>
  <RandomAuto
      v-if="mode === Mode.Auto"
      :character="character"
      :showAnswer="showAnswer"
      @showAnswer="onShowAnswer"
      @closeAnswer="onCloseAnswer"
      @changeCharacter="onChangeCharacter"
  />
  <RandomManual
      v-else
      :character="character"
      :showAnswer="showAnswer"
      @showAnswer="onShowAnswer"
      @closeAnswer="onCloseAnswer"
      @changeCharacter="onChangeCharacter"
  />
</template>

<style scoped>

</style>