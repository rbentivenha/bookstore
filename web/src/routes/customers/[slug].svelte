<script context="module">
  import Tab from "../../components/Tab.svelte";
  import NewEmployeeForm from "../../components/Forms/NewEmployeeForm.svelte";
  import Header from "../../components/Header.svelte";

  export async function preload({ params, query }) {
    console.log("preload -> query", query);
    console.log("preload -> params", params);
    // the `slug` parameter is available because
    // this file is called [slug].svelte
  }
</script>

<svelte:head>
  <title>Editar Funcionário</title>
</svelte:head>

<Header title="Cadastro de Funcionário" />

<NewEmployeeForm />
