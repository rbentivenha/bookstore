<script context="module">
  import { get_products } from "../../store/stock.js";

  export async function preload(page, session) {
    const prod = await get_products();

    return { prod };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { products, selected, sell_product } from "../../store/stock.js";
  import Header from "../../components/Header.svelte";
  import List from "../../components/List/index.svelte";
  import Card from "../../components/Cards/index.svelte";
  import CollapsedSideNav from "../../components/CollapsedSideNav.svelte";
  import Button from "../../components/Button.svelte";

  export let prod;

  function handleEdit() {}

  function handleDelete() {}

  function handleSelect(product) {
    selected.set(product);
  }

  function handleSell(params) {
    sell_product(params);
  }
</script>

<style>
  img {
    display: block;
    margin: 0 auto;
    padding: 5px;
  }

  .img-container {
    background-color: rgb(52, 151, 151);
    display: block;
    border-radius: 100%;
    height: 120px;
    width: 120px;
    margin: 0 auto 50px auto;
  }

  .create_employee {
    margin: 10px;
    display: block;
    float: right;
    justify-content: right;
  }
</style>

<svelte:head>
  <title>Consulta: Clientes</title>
</svelte:head>

<Header title="Consulta: Produtos">
  <div class="create_employee">
    <Button segment={`/stock/new`}>+ Novo</Button>
  </div>
</Header>

<svelte:component this={CollapsedSideNav}>
  {#if prod}
    <div id="main">
      <List>
        {#each prod as product, i}
          <div class="w-1/5 p-2">
            <svelte:component
              this={Card}
              border
              shadow
              on:clicked={handleSelect(product)}>
              <span slot="title">
                <img
                  src="https://image.flaticon.com/icons/png/512/1146/1146751.png"
                  alt="Product"
                  width="100"
                  height="100" />
                {product.title}
                <a href={`/stock/${product.id}`}>Editar</a>
              </span>
              <a href={`/stock/sell/${product.id}`}>Vender</a>
            </svelte:component>
          </div>
        {/each}
      </List>
    </div>
  {/if}
  <span slot="content">
    <div class="img-container">
      <img
        src="https://image.flaticon.com/icons/png/512/1146/1146751.png"
        alt="Product"
        width="100"
        height="100" />
    </div>
    {#if $selected}
      <Card border shadow inline divider>
        <span slot="title">Dados do produto</span>

        {#each $products.meta as metadata}
          {#if metadata.type === 'Money'}
            <li>{metadata.title}: R$ {$selected[metadata.key].toFixed(2)}</li>
          {:else if metadata.type === 'Date'}
            <li>
              {metadata.title}: {new Date(Number($selected[metadata.key])).toLocaleString('pt-BR')}
            </li>
          {:else}
            <li>
              {metadata.title}: {$selected[metadata.key] ? $selected[metadata.key] : ''}
            </li>
          {/if}
        {/each}
      </Card>
    {/if}
  </span>
</svelte:component>
