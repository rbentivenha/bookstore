<script>
  import Form from "../../components/Forms/index.svelte";
  import Header from "../../components/Header.svelte";
  import { new_product_registry, new_product } from "../../store/stock.js";
  import FloatingButtons from "../../components/Buttons/FloatingButtons.svelte";
  import { goto, stores } from "@sapper/app";
  const { session } = stores();

  const metadata = [
    { key: "price", label: "Preço", type: "Number" },
    { key: "title", label: "Titulo", type: "String" },
    { key: "descrip", label: "Descrição", type: "String" }
  ];
  let data = {
    price: "",
    title: "",
    descrip: ""
  };

  function handleChange({ detail: { value } }) {
    data = value;
  }

  function handleCancel() {}

  async function handleSave() {
    try {
      const registry = await new_product_registry($session.user);
      const product = await new_product({ ...data, regid: registry });
      await goto("/stock");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdate() {}
</script>

<svelte:head>
  <title>Cadastro de Produto</title>
</svelte:head>

<Header title="Cadastro de Produto" />

<Form {metadata} {data} on:change={handleChange} />
<FloatingButtons
  on:cancel={handleCancel}
  on:save={handleSave}
  on:update={handleUpdate}
  isEdit={false} />
