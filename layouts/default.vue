<script setup lang="ts">

</script>

<template>
  <div class="w-screen h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100">
    <header class="w-full fixed">
      <nav class="flex justify-end items-center p-2">
        <a href="https://github.com/twozero28/random-hiragana-katakana" target="_blank">
          <IconGithub class="w-6 h-6"/>
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