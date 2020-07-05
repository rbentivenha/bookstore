<script>
  import { createEventDispatcher } from "svelte";
  export let value;
  export let label;

  const dispatch = createEventDispatcher();

  function handleInput({ target: { value } }) {
    dispatch("change", {
      value
    });
  }
</script>

<div class="container">
  <label
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    {label}
  </label>
  <input
    class="appearance-none block w-full bg-gray-200 text-gray-700 border
    border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
    focus:bg-white focus:border-gray-500"
    type="date"
    on:input={handleInput}
    {value} />
</div>
