<script>
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  import { sales } from "../../store/sales.js";
  import DataTable from "../../components/DataTable/index.svelte";
  import Header from "../../components/Header.svelte";
  $: {
    console.log($sales);
  }
</script>

<Header title="Consulta: Vendas">
</Header>

{#if $sales && $session.user}
  <DataTable metadata={$sales.meta} data={$sales.data} />
{/if}
