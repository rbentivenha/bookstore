<script>
  import moment from "moment";

  export let data;
  export let metadata;
  export let title;
  export let image = null;
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
  {#if image}
    <img class="w-full" src={image} alt="User" />
  {/if}
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    {#if data && metadata}
      {#each data as d}
        {#each metadata as m}
          {#if m.type === 'Date'}
            <p class="text-white text-base block">
              {m.title}: {moment(parseInt(d[m.key])).format('DD/MM/YYYY')}
            </p>
          {:else}
            <p class="text-white text-base block">{m.title}: {d[m.key]}</p>
          {/if}
        {/each}
      {/each}
    {/if}
  </div>
</div>
