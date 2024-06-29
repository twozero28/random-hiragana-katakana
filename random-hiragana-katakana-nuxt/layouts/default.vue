<script setup lang="ts">

const route = useRoute()
const isIndex = computed(() => route.name === 'index')
const justifyClass = computed(() => {
  if (isIndex.value) {
    return 'justify-end';
  }
  return 'justify-between'
})

const isAuto = useIsAuto();
</script>

<template>
  <div class="w-screen h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100">
    <header class="w-full fixed">
      <nav class="flex items-center p-2" :class="[justifyClass]">
        <div v-if="!isIndex" class="flex flex-wrap items-center space-x-2">
          <div class="w-fit">
            <OptionModeSelect selectPadding="p-1"/>
          </div>
          <div class="w-fit" v-if="isAuto">
            <OptionTimeSelect selectPadding="p-1"/>
          </div>
          <div class="w-fit">
            <OptionCharacterSelect selectPadding="p-1"/>
          </div>
        </div>
        <a href="https://github.com/twozero28/random-hiragana-katakana" target="_blank">
          <BaseGithubIcon class="w-6 h-6"/>
        </a>
      </nav>
    </header>
    <main class="w-full h-full flex items-center justify-center">
      <slot/>
    </main>
  </div>
</template>

<style scoped>

</style>