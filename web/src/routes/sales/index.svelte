<script>
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  import { sales } from "../../store/sales.js";
  import DataTable from "../../components/DataTable/index.svelte";
  import Header from "../../components/Header.svelte";
</script>

<Header title="Consulta: Vendas">
</Header>

{#if $sales}
  <DataTable metadata={$sales.meta} data={$sales.data} />
{/if}
