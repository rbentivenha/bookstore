<script>
  import DataTable from "../../components/DataTable/index.svelte";
  import Header from "../../components/Header.svelte";
  import { customers } from "../../store/customers.js";
  import EmployeeAddressData from "../../components/Forms/EmployeeAddressData.svelte";
  import Tab from "../../components/Tab.svelte";

  let selected = false;
  let tabs = [];

  const head = [
    { title: "Cod", type: "Number", key: "user_id" },
    { title: "Nome", type: "String", key: "fname", searchable: true },
    { title: "Sobrenome", type: "String", key: "lname", searchable: true },
    { title: "CPF", type: "String", key: "cpf", searchable: true },
    { title: "Email", type: "String", key: " email" },
    { title: "Data de Criação", type: "Date", key: "creation_date" },
    { title: "Aniversário", type: "Date", key: "bdate" },
    { title: "Telefone", type: "String", key: "phone" },
    { title: "Tipo", type: "String", key: "user_type" },
    { title: "Endereço", type: "Object", key: "user_address" },
    { title: "Compras", type: "Object", key: "order" },
    { title: "Tabela", type: "Typename", key: "__typename" }
  ];

  function handleEdit(event) {
    console.log(event);
  }

  function handleDelete(event) {
    console.log(event);
  }

  function handleSelect(event) {
    selected = event.detail.value;
  }

  function handleClear() {
    selected = false;
    extraData = false;
  }

  $: {
    if (selected) {
      let { user_address, order } = selected;
      user_address = {user_address: [user_address]}
      order = {order}
      tabs = [
        {
          key: "Dados Pessoais",
          component: EmployeeAddressData,
          content: {
            head: [
              { key: "street_name", type: "String", title: "Rua" },
              { key: "street_num", type: "String", title: "Número" },
              { key: "city", type: "String", title: "Cidade" },
              { key: "postal_code", type: "String", title: "Código Postal" },
              { key: "__typename", type: "Typename", title: "Tabela" }
            ],
            data: user_address
          }
        },
        {
          key: "Compras",
          component: DataTable,
          content: {
            head: [
              { key: "price", type: "Float", title: "Preço" },
              { key: "title", type: "String", title: "Item de compra" },
              { key: "descrip", type: "String", title: "Descrição" },
              { key: "fname", type: "String", title: "Vendedor" },
              { key: "lname", type: "String", title: "Sobrenome" },
              { key: "cpf", type: "String", title: "CPF" },
              { key: "email", type: "String", title: "Email" },
              { key: "phone", type: "String", title: "Telefone" },
              { key: "__typename", type: "Typename", title: "Tabela" }
            ],
            data: order
          }
        }
      ];
    }
  }
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    background-color: white;
    padding: 10px;
  }

  .grid-container > div {
    text-align: center;
  }

  .header {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 4;
    margin: 20px;
  }

  .content {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .extraContent {
    grid-column-start: 1;
    grid-column-end: 4;
  }
</style>

<svelte:head>
  <title>Consulta: Clientes</title>
</svelte:head>

<div class="grid-container">
  <div class="header">
    <Header title="Consulta: Clientes" />
  </div>
  <div class="content">
    {#if $customers}
      <svelte:component
        this={DataTable}
        {head}
        data={$customers}
        hasSelect
        on:select={handleSelect} />
      <!-- hasActionColumn
        on:edit={handleEdit}
        on:del={handleDelete} -->
    {/if}
  </div>
  <div class="extraContent">
    {#if selected}
      <Tab {tabs} />
    {/if}
  </div>
</div>
