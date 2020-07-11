<script>
  import { stores } from "@sapper/app";
  const { session } = stores();
  import { products, selected } from "../../store/stock.js";
  import Header from "../../components/Header.svelte";
  import List from "../../components/List/index.svelte";
  import Card from "../../components/Cards/index.svelte";
  import CollapsedSideNav from "../../components/CollapsedSideNav.svelte";
  import Button from "../../components/Button.svelte";
  import UserDetailsCard from "../../components/Cards/UserDetailsCard.svelte";
  import moment from "moment";

  function handleDelete() {}

  function handleSelect(product) {
    selected.set(product);
  }
  let address = { metadata: {}, data: [] },
    extraHour = { metadata: {}, data: [] },
    registredProducts = { metadata: {}, data: [] },
    sales = { metadata: {}, data: [] };
</script>

<svelte:head>
  <title>Consulta: Produtos</title>
</svelte:head>

<!-- {#if $session.user} -->
<Header title="Consulta: Produto">
  <div>
    <Button segment={`/stock/new`}>+ Produto</Button>
  </div>
</Header>

{#if $products}
  <div id="main">
    <List>
      {#each $products.data as product, i}
        <div class="w-1/5 p-2">
          <svelte:component
            this={Card}
            border
            shadow
            on:clicked={handleSelect(product)}>
            <span slot="title">
              <img
                src="https://image.flaticon.com/icons/svg/1474/1474613.svg"
                alt="User"
                width="100"
                height="100" />
              {product.title}
              <a href={`/stock/${product.id}`}>
                <i class="fas fa-edit" />
              </a>
              <a href={`/stock/sell/${product.id}`}>
                <i class="fas fa-cart-arrow-down" />
              </a>
            </span>
            {#each $products.meta as metadata}
              {#if metadata.type === 'Money'}
                <li>{metadata.title}: R$ {product[metadata.key]}</li>
              {:else if metadata.type === 'Date'}
                <li>
                  {metadata.title}: {moment(parseInt(product[metadata.key])).format('DD/MM/YYYY')}
                </li>
              {:else}
                <li>{metadata.title}: {product[metadata.key]}</li>
              {/if}
            {/each}
          </svelte:component>
        </div>
      {/each}
    </List>
  </div>
{/if}
<!-- {/if} -->
