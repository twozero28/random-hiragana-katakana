<script>
  import GithubIcon from "./GithubIcon.svelte";
  import {isAuto, selectCharacter, time} from '../utils/stores.js';

  const autoCheckBox = crypto.randomUUID();

  const times = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];


</script>

<nav class="bar">
  <div class="mode-container">
    <div>
      <input id={autoCheckBox} type="checkbox" bind:checked={$isAuto} />
      <label for={autoCheckBox}>Auto</label>
    </div>
    <div>
      <select bind:value={$selectCharacter}>
        <option value="both">Both</option>
        <option value="hiragana">Hiragana</option>
        <option value="katakana">Katakana</option>
      </select>
    </div>
    {#if $isAuto}
      <div>
        <select bind:value={$time}>
          {#each times as t}
            <option value={t}>{t}</option>
          {/each}
        </select>
      </div>
    {/if}
  </div>
  <GithubIcon/>
</nav>

<style>
  .bar {
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  label {
    cursor: pointer;
    padding-left: 4px;
  }

  .mode-container {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  .mode-container > div {
    display: flex;
    align-items: center;
  }

</style>