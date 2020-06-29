<script>
  import Form from "../../components/Forms/index.svelte";
  import Header from "../../components/Header.svelte";
  import { new_product } from "../../store/stock.js";

  const metadata = [
    { key: "price", label: "Preço", type: "Number" },
    { key: "title", label: "Titulo", type: "String" },
    { key: "descrip", label: "Descrição", type: "String" },
    { key: "status", label: "Status", type: "String" }
  ];
  const data = {};

  async function handleSubmit({ detail: { value } }) {
    await new_product(value);
  }
</script>

<svelte:head>
  <title>Cadastro de Produto</title>
</svelte:head>

<Header title="Cadastro de Produto" />

<Form {metadata} {data} on:submit={handleSubmit} />
