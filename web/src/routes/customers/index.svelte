<script>
  import Header from "../../components/Header.svelte";
  import Button from "../../components/Button.svelte";
  import { customers, selected } from "../../store/customers.js";
  import List from "../../components/List/index.svelte";
  import CollapsedSideNav from "../../components/CollapsedSideNav.svelte";
  import Card from "../../components/Cards/index.svelte";
  import moment from "moment";
  import UserDetailsCard from "../../components/Cards/UserDetailsCard.svelte";

  function handleSelect(customer) {
    console.log("handleSelect -> customer", customer)
    selected.set(customer);
  }

  let address = { metadata: {}, data: [] },
    shopping = { metadata: {}, data: [] };

  $: {
    if ($customers && $customers.meta && $selected) {
      address.metadata = $customers.meta.address;
      address.data = [$selected.address];
      shopping.metadata = $customers.meta.shop;
      shopping.data = $selected.shopping;
    }
  }
</script>

<svelte:head>
  <title>Consulta: Cliente</title>
</svelte:head>

<!-- {#if $session.user} -->
<Header title="Consulta: Cliente">
  <div>
    <Button segment={`/customers/new`}>Criar cliente</Button>
  </div>
</Header>

<svelte:component this={CollapsedSideNav}>
  {#if $customers}
    <div id="main">
      <List>
        {#each $customers.data as customer, i}
          <div class="w-1/5 p-2">
            <svelte:component
              this={Card}
              border
              shadow
              on:clicked={handleSelect(customer)}>
              <span slot="title">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
                  alt="User"
                  width="100"
                  height="100" />
                {customer.lname}, {customer.fname}
                <a href={`/customers/${customer.cpf}`}>
                  <i class="fas fa-user-edit" />
                </a>
              </span>
              {#each $customers.meta.user as metadata}
                {#if metadata.type === 'Money'}
                  <li>{metadata.title}: R$ {customer[metadata.key]}</li>
                {:else if metadata.type === 'Date'}
                  <li>
                    {metadata.title}: {moment(parseInt(customer[metadata.key])).format('DD/MM/YYYY')}
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
    <UserDetailsCard
      image="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
      title="Endereço"
      {...address} />
    <UserDetailsCard title="Compras" {...shopping} />
  </span>
</svelte:component>
