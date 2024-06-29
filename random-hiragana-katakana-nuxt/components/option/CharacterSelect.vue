<script lang="ts" setup>
import {CharacterSelection} from "~/types/enums";

defineProps<{
  selectPadding?: string
}>()
const selection = useCharacterSelection();
const selections = enumToArray(CharacterSelection);

</script>

<template>
  <BaseSelect v-model="selection" :padding="selectPadding">
    <template  v-for="s in selections">
      <option :value="CharacterSelection[s.value]" :selected="s.key === selection">{{ s.value }}</option>
    </template>
  </BaseSelect>
</template>

<style scoped></style>
