<script>
  import Character from "./Character.svelte";
  import Pronunciation from "./Pronunciation.svelte";
  import {getRandomCharacter} from "../utils/get-random-character.js";
  import {hiraganas, katakanas} from "../data/charaters.js";
  import {isAuto, selectCharacter, time, isShown, character} from "../utils/stores.js";

  let characters = [...hiraganas, ...katakanas];
  $: {
    $isShown = false;
    if ($selectCharacter === 'hiragana') {
      characters = [...hiraganas];
    } else if ($selectCharacter === 'katakana') {
      characters = [...katakanas];
    } else {
      characters = [...hiraganas, ...katakanas];
    }
    $character = getRandomCharacter(characters);
  }

  let timeoutId;
  $: {
    if ($isAuto && !$isShown) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        $isShown = true;
      }, $time * 1000);
    } else if ($isAuto && isShown) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        $isShown = false;
        $character = getRandomCharacter(characters);
      }, 1250);
    } else {
      clearTimeout(timeoutId);
    }
  }
</script>

<div>
  <Character value={$character.problem}/>
  {#if $isShown}
    <Pronunciation value={$character.answer}/>
  {/if}
</div>

<style>
  div {
    position: relative;
    user-select: none;
    text-align: center;
  }
</style>