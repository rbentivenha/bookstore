<script>
  import { stores } from "@sapper/app";
  const { session } = stores();
  import Form from "../../../components/Forms/index.svelte";
  import Header from "../../../components/Header.svelte";
  import { selected, sell } from "../../../store/stock.js";
  import Button from "../../../components/Button.svelte";

  const metadata = [
    { key: "pid", label: "Cód", type: "Number" },
    { key: "ucpf", label: "Cliente", type: "String" }
  ];
  let data = { pid: null, ucpf: null };

  function handleChange({ detail: { value } }) {
    data = value;
  }

  async function handleClick() {
    console.log("handleClick -> value", data)
    console.log("handleClick -> $session", $session)
    await sell({...data, epis: $session.user})
  }
</script>

<svelte:head>
  <title>Venda</title>
</svelte:head>

<Header title="Venda de Produto" />

<Form {metadata} {data} on:change={handleChange} />
<div class="flex fixed w-full">
  <button
    on:click={handleClick}
    class="mx-auto my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
    px-6 rounded">
    Salvar
  </button>
</div>
