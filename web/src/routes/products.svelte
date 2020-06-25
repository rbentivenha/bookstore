<script>
  import DataTable from "../components/DataTable/index.svelte";
  import client from "../graphql/client.js";
  import { getProducts } from "../graphql/queries.js";
  import Header from "../components/Header.svelte";

  const head = [
    { title: "Cod", type:"Number" , key: "product_id", searchable: false },
    { title: "Empregado", type:"String" , key: "employee_id", searchable: false },
    { title: "Preço", type:"Float" , key: "price", searchable: false },
    { title: "Título", type:"String" , key: "title", searchable: true },
    { title: "Descrição", type:"String" , key: "descrip", searchable: true },
    { title: "Status", type:"String" , key: "status", searchable: false },
    { title: "Produto", type:"Object" , key: "product_type", searchable: false },
    { title: "Tabela", type:"Typename" , key: "__typename", searchable: false }
  ];

  let data;

  client
    .query({
      query: getProducts
    })
    .then(res => {
      data = res.data;
    });

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
</style>

<svelte:head>
  <title>Produtos</title>
</svelte:head>

<div class="grid-container">
  <div class="header">
    <Header title="Consulta de Produtos" />
  </div>
  <div class="content">
    {#if data}
      <DataTable
        {head}
        {data}
        hasSelect
        hasActionColumn
        on:edit={handleEdit}
        on:del={handleDelete}
        on:select={handleSelect} />
    {/if}
  </div>
</div>
