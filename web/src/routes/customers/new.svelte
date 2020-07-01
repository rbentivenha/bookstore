<script>
  import Tab from "../../components/Tab.svelte";
  import NewUserForm from "../../components/Forms/NewUserForm.svelte";
  import Header from "../../components/Header.svelte";
  import { set_customer } from "../../store/customers.js";
  import { goto } from "@sapper/app";

  function handleSubmit({ detail: { value: data } }) {
    Promise.resolve(set_customer(data));
    Promise.resolve(goto("/customers?v=x", history.replaceState));
  }
</script>

<svelte:head>
  <title>Cadastro de Clientes</title>
</svelte:head>

<Header title="Cadastro de Clientes" />

<NewUserForm on:submit={handleSubmit} />
