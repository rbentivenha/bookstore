<script>
  import { createEventDispatcher } from "svelte";
  import InputText from "./InputText.svelte";
  import InputNumber from "./InputNumber.svelte";
  import InputDate from "./InputDate.svelte";
  export let data;
  export let metadata;

  const dispatch = createEventDispatcher();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch("submit", {
      value: data
    });
  }

  function handleChange({ detail: { value } }, inputKey) {
    data[0][inputKey] = value;
  }
</script>

<style>
  .container {
    display: block;
    width: 100%;
  }

  label {
    display: block;
    width: 20%;
    text-align: start;
    padding: 8px;
  }

  input {
    font-family: Arial, Helvetica, sans-serif;
    display: block;
    font-size: 16px;
    padding: 8px;
    width: 60%;
  }

  button {
    font-size: 16px;
    padding: 10px;
    margin: 10px 0 0 62%;
    border: 0px solid white;
  }
</style>

<form>
  {#each metadata as line}
    {#if line.type === 'String'}
      <InputText
        label={line.label}
        on:change={e => handleChange(e, line.key)}
        value={data[line.key] ? data[line.key] : ""} />
    {:else if line.type === 'Number'}
      <InputNumber
        label={line.label}
        on:change={e => handleChange(e, line.key)}
        value={data[line.key] ? data[line.key] : ""} />
    {:else if line.type === 'Date'}
      <InputDate
        label={line.label}
        on:change={e => handleChange(e, line.key)}
        value={data[line.key] ? data[line.key] : ""} />
    {:else}
      <label>{line.label}</label>
      <input type="text" name={line.key} value={data[line.key] ? data[line.key] : ""} />
    {/if}
  {/each}
  <div class="container">
    <button on:click={handleSubmit}>Salvar</button>
  </div>
</form>
