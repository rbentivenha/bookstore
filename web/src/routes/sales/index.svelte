<script>
  import { sales } from "../../store/sales.js";
  import DataTable from "../../components/DataTable/index.svelte";
  import Header from "../../components/Header.svelte";
  $: {
    console.log($sales);
  }
</script>

<Header title="Consulta: Vendas">
</Header>

{#if $sales}
  <DataTable metadata={$sales.meta} data={$sales.data} />
{/if}
