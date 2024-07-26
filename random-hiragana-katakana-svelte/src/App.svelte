<script>
  import NavBar from "./lib/components/NavBar.svelte";
  import Content from "./lib/components/Content.svelte";
  import {getRandomCharacter} from "./lib/utils/get-random-character.js";
  import {hiraganas, katakanas} from "./lib/data/charaters.js";
  import {isAuto, isShown, character} from "./lib/utils/stores.js";

  const handleClick = () => {
    if ($isAuto) return;
    if ($isShown) {
      $isShown = false;
      $character = getRandomCharacter([...hiraganas, ...katakanas]);
      return;
    }
    $isShown = true;
  }

</script>

<header>
  <NavBar/>
</header>

<main class:manual={!$isAuto} on:click={handleClick}>
  <Content/>
</main>

<style>
  header {
    width: 100vw;
    position: fixed;
  }

  main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .manual {
    cursor: pointer;
  }
</style>
