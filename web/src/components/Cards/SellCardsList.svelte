<script>
  import Card from "./index.svelte";
  export let data;
  export let head;
</script>

<style>

</style>

{#each data[Object.keys(data)] as item}
  <Card shadow border>
    <div slot="title">
      <div>{item['title']}</div>
    </div>
    <div>
      <div>Descrição: {item['descrip']}</div>
      <div>Preço: {item['price']}</div>
      <div>Cliente: {`${item['fname']} ${item['lname']}`}</div>
    </div>
  </Card>
{/each}
