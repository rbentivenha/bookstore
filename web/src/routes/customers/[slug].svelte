<script context="module">
  import Tab from "../../components/Tab.svelte";
  import NewUserForm from "../../components/Forms/NewUserForm.svelte";
  import Header from "../../components/Header.svelte";
  import { update_customer, selected } from "../../store/customers.js"

  let user_id;

  export async function preload({ params, query }) {
    user_id = params.slug;
    // the `slug` parameter is available because
    // this file is called [slug].svelte
  }
</script>

<script>
  async function handleSubmit({ detail: { value } }) {

      await update_customer(value)
  }
</script>

<svelte:head>
  <title>Editar Cliente</title>
</svelte:head>

<Header title="Cadastro de Cliente" />

<NewUserForm initial_value={$selected} on:submit={handleSubmit} />
