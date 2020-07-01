<script>
  import Form from "../../../components/Forms/index.svelte";
  import Header from "../../../components/Header.svelte";
  import { sell_product, selected } from "../../../store/stock.js";

  const metadata = [
    { key: "id", label: "Cód", type: "Number" },
    { key: "customer", label: "Cliente", type: "String" },
    { key: "employee", label: "Vendedor", type: "String" }
  ];
  const data = {};

  async function handleSubmit({ detail: { value } }) {
    await sell_product({...$selected, ...value});
  }
</script>

<svelte:head>
  <title>Cadastro de Produto</title>
</svelte:head>

<Header title="Cadastro de Produto" />

<Form {metadata} {data} on:submit={handleSubmit} />
