<script>
  import {
    employees,
    employees_selling,
    employees_address,
    employee_setter
  } from "../../store/employees.js";
  import Header from "../../components/Header.svelte";
  import List from "../../components/List/index.svelte";
  import Card from "../../components/Cards/index.svelte";
  import CollapsedSideNav from "../../components/CollapsedSideNav.svelte";
  import Button from "../../components/Button.svelte";

  let selected = false,
    address = false,
    sells = false,
    extra_hours = false,
    registred_products = false;

  let tabs;

  function handleEdit(id) {
    employee_setter.get_by_id(id);
  }

  function handleDelete() {}

  function handleSelect(employee) {
    selected = employee;
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
  <title>Consulta: Funcionários</title>
</svelte:head>

<Header title="Consulta: Funcionários">
  <div class="create_employee">
    <Button segment={`/employees/new`}>Criar funcionário</Button>
  </div>
</Header>

<svelte:component this={CollapsedSideNav}>
  {#if $employees}
    <div id="main">
      <List>
        {#each $employees.data as employee, i}
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
                href={`/employees/${employee.cpf}`}
                on:click={() => handleEdit(employee.cpf)}>
                Editar
              </a>
            </span>
            {#each $employees.meta as metadata}
              {#if metadata.type === 'Money'}
                <li>
                  {metadata.title}: R$ {employee[metadata.key].toFixed(2)}
                </li>
              {:else if metadata.type === 'Date'}
                <li>
                  {metadata.title}: {new Date(Number(employee[metadata.key])).toLocaleString('pt-BR')}
                </li>
              {:else}
                <li>{metadata.title}: {employee[metadata.key]}</li>
              {/if}
            {/each}
          </svelte:component>
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
    <Card border shadow inline>
      <span slot="title">Dados de Endereço</span>
      {#if $employees_address}
        {#each $employees_address.meta as metadata}
          {#if selected}
            <div>
              {metadata.title}: {$employees_address.data.filter(el => el.user_id === selected.user_id)[0].address[metadata.key]}
            </div>
          {/if}
        {/each}
      {/if}
    </Card>
    <Card border shadow inline>
      <span slot="title">Dados de Venda</span>
      {#if $employees_selling}
        {#each $employees_selling.meta as metadata}
          {#if selected}
            <div>
              {metadata.title}: {$employees_selling.data.filter(el => el.user_id === selected.user_id)[0].selling[metadata.key]}
            </div>
          {/if}
        {/each}
      {/if}
    </Card>
  </span>
</svelte:component>
