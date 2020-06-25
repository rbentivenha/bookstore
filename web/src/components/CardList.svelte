<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./Cards/index.svelte";

  export let data;
  export let labels;

  const dispach = createEventDispatcher();

  function handleClick(item) {
    dispach("select", {
      value: item
    });
  }
</script>

<style>
  .conteiner {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  p {
    text-align: start;
  }
</style>

{#each data[Object.keys(data)] as item}
  <Card on:click={() => handleClick(item)}>
    <h3 slot="title">{`${item.fname} ${item.lname}`}</h3>
    <div slot="content">
      <div class="conteiner">
        {#each labels as label}
          {#if label.type === 'Number'}
            <p>
              <b>{label.title}:</b>
              {item[label.key]}
            </p>
          {:else if label.type === 'Date'}
            <p>
              <b>{label.title}:</b>
              {new Date(Number(item[label.key])).toLocaleString('pt-BR')}
            </p>
          {:else if label.type === 'String'}
            <p>
              <b>{label.title}:</b>
              {item[label.key]}
            </p>
          {/if}
        {/each}
      </div>
    </div>
  </Card>
{/each}
