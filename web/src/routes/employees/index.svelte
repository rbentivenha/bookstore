<script>
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  import { employees, selected } from "../../store/employees.js";
  import Header from "../../components/Header.svelte";
  import List from "../../components/List/index.svelte";
  import Card from "../../components/Cards/index.svelte";
  import CollapsedSideNav from "../../components/CollapsedSideNav.svelte";
  import Button from "../../components/Button.svelte";
  import UserDetailsCard from "../../components/Cards/UserDetailsCard.svelte";
  import moment from "moment";
  
  function handleDelete() {}

  function handleSelect(employee) {
    selected.set(employee);
  }
  let address = { metadata: {}, data: [] },
    extraHour = { metadata: {}, data: [] },
    registredProducts = { metadata: {}, data: [] },
    sales = { metadata: {}, data: [] };
  $: {
    if ($employees && $employees.meta && $selected) {
      address.metadata = $employees.meta.address;
      address.data = [$selected.address];
      extraHour.metadata = $employees.meta.extraHour;
      extraHour.data = $selected.extra_hours;
      registredProducts.metadata = $employees.meta.registredProducts;
      registredProducts.data = $selected.registredProducts;
      sales.metadata = $employees.meta.sales;
      sales.data = $selected.sales;
    }
  }
</script>

<style>
  img {
    display: block;
    margin: 0 auto;
    padding: 5px;
  }
</style>

<svelte:head>
  <title>Consulta: Funcionários</title>
</svelte:head>

<!-- {#if $session.user} -->
<Header title="Consulta: Funcionários">
  <div>
    <Button segment={`/employees/new`}>Criar funcionário</Button>
  </div>
</Header>

<svelte:component this={CollapsedSideNav}>
  {#if $employees}
    <div id="main">
      <List>
        {#each $employees.data as employee, i}
          <div class="w-1/5 p-2">
            <svelte:component
              this={Card}
              border
              shadow
              on:clicked={handleSelect(employee)}>
              <span slot="title">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
                  alt="User"
                  width="100"
                  height="100" />
                {employee.lname}, {employee.fname}
                <a
                  href={`/employees/${employee.pis}`}>
                  <i class="fas fa-user-edit"></i>
                </a>
                <a
                  href={`/employees/extra_hour/${employee.pis}`}>
                  <i class="fas fa-user-clock"></i>
                </a>
              </span>
              {#each $employees.meta.user as metadata}
                {#if metadata.type === 'Money'}
                  <li>{metadata.title}: R$ {employee[metadata.key]}</li>
                {:else if metadata.type === 'Date'}
                  <li>
                    {metadata.title}: {moment(parseInt(employee[metadata.key])).format("DD/MM/YYYY")}
                  </li>
                {:else}
                  <li>{metadata.title}: {employee[metadata.key]}</li>
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
    <UserDetailsCard title="Horas Extras" {...extraHour} />
    <UserDetailsCard title="Produtos Registrados" {...registredProducts} />
    <UserDetailsCard title="Vendas" {...sales} />
  </span>
</svelte:component>
<!-- {/if} -->
