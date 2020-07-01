<script context="module">
  import { get_customers } from "../../store/customers.js";

  export async function preload(page, session) {
    if (!session.user || session.user.user_type !== "ADMIN") {
      return this.redirect(302, "/");
    }
    const _customers = await get_customers();
    
    return { _customers };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  import { customers, selected } from "../../store/customers.js";
  import Header from "../../components/Header.svelte";
  import List from "../../components/List/index.svelte";
  import Card from "../../components/Cards/index.svelte";
  import CollapsedSideNav from "../../components/CollapsedSideNav.svelte";
  import Button from "../../components/Button.svelte";
  import { goto } from "@sapper/app";
  import { onDestroy } from 'svelte';

  export let _customers;

  let address = false,
    sells = false,
    extra_hours = false,
    registred_products = false;

  let tabs;

  async function handleEdit(customer) {
    await goto(`/customers/${customer.cpf}`);
  }

  function handleDelete() {}

  function handleSelect(employee) {
    selected.set(employee);
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

<Header title="Consulta: Clientes">
  <div class="create_employee">
    <Button segment={`/customers/new`}>+ Novo</Button>
  </div>
</Header>

{#if $session.user}
  <svelte:component this={CollapsedSideNav}>
    {#if _customers && $customers}
      <div id="main">
        <List>
          {#each _customers as customer, i}
            <div class="w-1/5 p-2">
              <svelte:component
                this={Card}
                border
                shadow
                on:clicked={() => handleSelect(customer)}>
                <span slot="title">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
                    alt="User"
                    width="100"
                    height="100" />
                  {customer.lname}, {customer.fname}
                  <button on:click={() => handleEdit(customer)}>Editar</button>
                </span>
                {#each $customers.meta as metadata}
                  {#if metadata.type === 'Money'}
                    <li>
                      {metadata.title}: R$ {customer[metadata.key].toFixed(2)}
                    </li>
                  {:else if metadata.type === 'Date'}
                    <li>
                      {metadata.title}: {new Date(Number(customer[metadata.key])).toLocaleString('pt-BR')}
                    </li>
                  {:else}
                    <li>{metadata.title}: {customer[metadata.key]}</li>
                  {/if}
                {/each}
              </svelte:component>
            </div>
          {/each}
        </List>
      </div>
    {/if}
    <span slot="content">
      <div class="img-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
          alt="User"
          width="100"
          height="100" />
      </div>
      {#if $selected}
        <Card border shadow inline>
          <span slot="title">Dados de Endereço</span>

          {#each $customers.address_meta as metadata}
            <div>{metadata.title}: {$selected.address[0][metadata.key]}</div>
          {/each}
        </Card>
        <Card border shadow inline>
          <span slot="title">Dados de Compra</span>
          {#each $customers.buy_meta as metadata}
            <div>{metadata.title}: {$selected.buy_stat[metadata.key]}</div>
          {/each}
        </Card>
      {/if}
    </span>
  </svelte:component>
{/if}
