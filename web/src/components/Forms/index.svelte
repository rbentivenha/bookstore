<script>
  import { createEventDispatcher } from "svelte";
  import InputText from "./InputText.svelte";
  import InputNumber from "./InputNumber.svelte";
  import InputDate from "./InputDate.svelte";
  import Select from "./Select.svelte";
  export let data;
  export let metadata;

  const dispatch = createEventDispatcher();

  function handleChange({ detail: { value } }, inputKey) {
    data[inputKey] = value;
    dispatch("change", {
      value: data
    });
  }
</script>

<form class="w-full max-w-lg mx-auto">
  {#each metadata as line}
    {#if line.type === 'String'}
      <InputText
        label={line.label}
        on:change={e => handleChange(e, line.key)}
        bind:value={data[line.key]} />
    {:else if line.type === 'Number'}
      <InputNumber
        label={line.label}
        on:change={e => handleChange(e, line.key)}
        bind:value={data[line.key]} />
    {:else if line.type === 'Date'}
      <InputDate
        label={line.label}
        on:change={e => handleChange(e, line.key)}
        bind:value={data[line.key]} />
    {:else if line.type === 'Select'}
      <Select
        label={line.label}
        bind:value={data[line.key]}
        on:change={e => handleChange(e, line.key)}
        options={line.options} />
    {:else}
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold
        mb-2">
        {line.label}
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500"
        type="text"
        name={line.key}
        bind:value={data[line.key]} />
    {/if}
  {/each}
</form>
