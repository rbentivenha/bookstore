<script>
  import { sales } from "../../store/sales.js";
  import DataTable from "../../components/DataTable/index.svelte";

  $: {
    console.log($sales);
  }
</script>

{#if $sales}
  <DataTable metadata={$sales.meta} data={$sales.data} />
{/if}
