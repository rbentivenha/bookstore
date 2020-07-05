<script>
  import { createEventDispatcher } from "svelte";
  export let value;
  export let label;
  export let options;

  const dispatch = createEventDispatcher();

  function handleInput({ target: { value } }) {
    dispatch("change", {
      value
    });
  }
</script>

<label
  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
  {label}
</label>
<select
  class="block appearance-none w-full bg-gray-200 border border-gray-200
  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none
  focus:bg-white focus:border-gray-500"
  id="grid-state"
  {value}
  on:change={handleInput}>
  {#if options}
    {#each options as o}
      <option value={o.text}>{o.text}</option>
    {/each}
  {/if}
</select>
