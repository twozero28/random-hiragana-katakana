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

const showDesc = ref(true);
onMounted(() => {
  showDesc.value = true
  const nav = document.querySelector('nav');
  setTimeout(() => showDesc.value = false, 5000)
  useEventListener(document, 'click', (e) => {
    if (nav && nav.contains(e.target as Node)) {
      return
    }
    showDesc.value = false;
    if (props.showAnswer) {
      emit('closeAnswer');
      emit('changeCharacter');
    } else {
      emit('showAnswer');
    }
  })
})

</script>

<template>
  <h3 class="absolute top-20" v-if="showDesc">
    Click or touch the screen
  </h3>
  <RandomView
      :character="character"
      :showAnswer="showAnswer"
  />
</template>

<style scoped></style>
