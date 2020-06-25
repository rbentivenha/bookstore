<script>
  import Header from "../components/Header.svelte";
  import Card from "../components/Cards/index.svelte";
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
  <title>Consulta: Financeiro</title>
</svelte:head>

<div class="grid-container">
  <div class="header">
    <Header title="Consulta de Produtos" />
  </div>
  <Card shadow border>
    <span slot="title">Teste</span>
    <span slot="content">Teste</span>
    <span slot="footer">Teste</span>
  </Card>
</div>
