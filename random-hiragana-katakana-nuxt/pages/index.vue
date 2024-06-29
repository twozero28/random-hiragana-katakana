<script setup lang="ts">
const isAuto = useIsAuto()
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="text-2xl lg:text-3xl font-bold">Let's Study Hiragana and Katakana</h1>
    <p class="text-sm lg:text-base mt-4">
      A random hiragana or katakana character will appear.<br>
      Try to guess the pronunciation.
    </p>
    <NuxtLink to="/start" class="my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      Start
    </NuxtLink>
    <div class="flex flex-wrap space-x-4">
      <div class="w-fit">
        <OptionModeSelect/>
      </div>
      <div class="w-fit" v-if="isAuto">
        <OptionTimeSelect/>
      </div>
      <div class="w-fit">
        <OptionCharacterSelect/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>